---
layout: post
title: Tips for writting docker files
date: 2020-05-15 01:06:05.000000000 -03:00
image: /images/posts/2020-05-15-tips-for-writting-docker-files/cover.png
table_of_contents: 2020-05-15-tips-for-writting-docker-files/table-of-contents.md
type: article
published: true
status: published
categories:
- devops
tags:
- docker,
- Docker,
- image,
- user,
- build,
- root,
- network,
- setup,
- compose,
- container,
- files,
- program,
- flag,
- COPY,
- run,
- host,
- flag,
- npm,
- Online,
- https
redirect_from:
  - /devops/tips-for-writting-docker-files
  - /docker/tips
---

Docker has revolutionized how developers build and deploy applications, being
one of the most popular container engine {% cite burns2019kubernetes --file 2020-05-15-tips-for-writting-docker-files %}.
Docker has support for different programming languages and runs natively on linux,
as opposed to virtual machines that mimics an entire operational system,
docker containers run on linux namespaces, removing the overhead
that virtual machines have, for example, the boot time. The virtual machine
needs time to boot, while docker is a service that starts on the host operational
system.

As opposed to the official best practices
{% cite best_practices_docker_hub --file 2020-05-15-tips-for-writting-docker-files %} on writting docker files,
the goal here is to share tips on approaches in how to write the docker files, this is not a
beginners guide in how docker works or how to use it.

For context, this post is somehow connected to the
playlist {% cite youtube_playlist --file 2020-05-15-tips-for-writting-docker-files %} I've built
to keep track of topics that are related to docker.

> **NOTE**: if you are starting with docker, have a look at the curriculum
> {% cite docker_curriculum --file 2020-05-15-tips-for-writting-docker-files %}
> first to get used to docker basics. Personally I have a presentation around
> docker basics available as well {% cite matheus_marabesi_docker_101 --file 2020-05-15-tips-for-writting-docker-files %}.

> **NOTE 2**: if you are interested in the nodejs docker image (how it is build)
> have a look at the official git repository {% cite official_nodejs_github --file 2020-05-15-tips-for-writting-docker-files %}

## Docker images and services

In this section, the focus is to go through the tips around building
a docker image and the docker compose services.

### 1. Make the basic setup with standard image

Starting to build docker images requires steps and previous knowledge on the
docker platform and ad least to understand a few commands such as RUN, COPY and
FROM. Based on those commands, the generated image can be big or small, it depends.

Docker hub offers ready to use images without the need to build one, and they are
classified as (from the biggest to the smallest): standard image, slim and alphine.

Dockerfile with standard image:

```shell
FROM node:12 # <--- standard image, and also the bigger compared to the next two version

WORKDIR /var/www/app

COPY . .

RUN npm install && npm run build

EXPOSE 5000

CMD npm run serve
```

Dockerfile with slim image:

```shell
FROM node:12-slim # <--- slim image, smaller, but also has less dependencies installed by default

WORKDIR /var/www/app

COPY . .

RUN npm install && npm run build

EXPOSE 5000

CMD npm run serve
```

Dockerfile with alpine image:

```shell
FROM node:12-slim # <--- slim image, the smallest, but also it has some drawbacks such as missing needed dependencies by the code

WORKDIR /var/www/app

COPY . .

RUN npm install && npm run build

EXPOSE 5000

CMD npm run serve
```

Usually the setup using the basic image is faster as it comes with almost everything
to run the program. on the other side though, the alphine version has almost
nothing to run the program, it has just the core, nothing else. Which in many 
cases will make the program to not run, depending on the dependencies.

### 2. Caching

Caching in docker is used to avoid refetching dependencies over and over again
even when they don't change. To avoid that, the docker layer system
can be used to trick the engine {% cite docker_and_kubernetes_caching --file 2020-05-15-tips-for-writting-docker-files %}.

```shell
FROM node:12-slim

WORKDIR /var/www/app

COPY package*.json ./ # <--- Caches the npm dependencies

RUN npm install && npm run build

COPY . .

EXPOSE 5000

CMD npm run serve
```

### 3. The root user

The root user is the default user in which the container runs, which makes
easier the process to set up permissions to access files or to setup configurations.
Usually this is a bad practice {% cite husky_best_practices_no_root --file 2020-05-15-tips-for-writting-docker-files %},
the container should not run with the root user due security issues
{% cite best_practices_nodejs_dockercon --file 2020-05-15-tips-for-writting-docker-files %}
{% cite keep_nodejs_rockin_in_docker --file 2020-05-15-tips-for-writting-docker-files %}.

Though for the process to set up the docker image this can be a bit harder,
given the fact that setting up a different user with less permission can
difficult the image setup.

If no user is given (as for example, the last 3 dockerfiles shown in the previous section),
docker will build it using `root`, which of course has security issues. To fix this issue
docker offers the flag `USER`.

```shell
FROM node:12-slim

USER node # <!--- specify the user for docker to build and run the image

WORKDIR /var/www/app

COPY package*.json ./

COPY . .

RUN npm install && npm run build

EXPOSE 5000

CMD npm run serve
```

This tip relies on the same approach as the previous one, first, make it work
with the root user, then start to trick around permissions with a specific user.

### 4. Separate concerns, avoid building different services into one image

As a best practice the recommended way to build containers is: one container equals
to one process. Which can avoid problems when it comes to managing them
as {% cite best_practices_docker_hub --file 2020-05-15-tips-for-writting-docker-files %}
describes in the section "Decouple applications".

### 5. setup docker file first, and then move to docker compose (if needed)

Usually, docker compose is the next step when building services to use with docker,
though developers tend to skip the first step which is to understand how the
image works and then move on to compose.

### 6. Networking and sharing hosts

Docker creates its own network interface, which in turn containers communicate
between each other. Therefore, there are scenarios in which this behavior
is not desired. For example, a database. As the database holds state (the data)
usually it is used an external provider (RDS, mongodb atlas etc).

By default the container can't access external ports, which in turn will
block the database connection. There are two possible options for that, using
a `network` flag or using the `add-host` flag.

```shell
# using --network flag
docker run --rm --network=host nginx
```

There is a side effect using the network flag, which will ignore the docker
network created automatically by docker and the container will run as if
it were in the host. Impacting the port that the application run and therefore
prevents the possibility of blue-green
deployments {% cite docker_blue_green_no_down_time --file 2020-05-15-tips-for-writting-docker-files %},
which requires two instances of the same app running, each on its specific port.

The `add-host` gives the flexibility needed to overcome the port issue. The
flag maps a specific host to a IP, the following example maps the localhost
to be the host.

```shell
# using --add-host flag
docker run --rm --add-host=localhost:192.168.1.102 nginx
```

## Docker compose

This section focus on the docker compose only.

### 7. Different docker compose files for different environments 

Docker compose files are used to compose the container orchestration, therefore
sometimes it is needed to use different behavior based on the environment
that the application is one. For example, in development mode, the database
container might be needed, but in production it might not be the case.

For that, it is possible to create different docker compose files for each
environment. For example, for development, staging and production we might have:

- development: `docker-compose-dev.yml`
- staging and production: `docker-compose-deploy.yml`

It is also possible to share code among each docker file, which might make
sense to create a `docker-compose.yml` as the base for the two files previously
mentioned.

## References

{% bibliography --cited_in_order --file 2020-05-15-tips-for-writting-docker-files %}