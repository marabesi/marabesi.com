---
layout: post
title: Kubernetes quick notes deployment (WIP)
date: 2021-05-01 01:06:05.000000000 -03:00
image: 
type: article
published: true
status: published
categories:
- devops
tags:
- kubernetes,
- Kubernetes,
- k8s,
- deployment,
- docker,
- exposing,
- kubectl,
- container,
- example,
- pod,
- Pod,
- expose,
- ReplicaSet,
- image,
- abstraction
---

As opposed to docker that operates on the container level directly, kubernetes
has a different approach as such there are a set of steps required to get
the application running into the cluster.  For example, in docker a simple
`docker run` creates the container and starts it. In kubernetes, first we need
to create a deployment and
then expose it.

## Creating a deployment

```sh
kubectl create deployment my-deployment-name --image=my-image
```

## Exposing the deployment

```sh
kubectl expose deployment my-deployment-name
```
## Managing containers

Therefore, it is possible to use kubernetes with the same docker behavior,
for example the `kubectl run` command is available for that. The attention point
is the need to have a pod. In other words, in docker you can run a container
with `docker run`, but in kubeternets you need a pod before that. The analogy
that {% cite kubernetes_for_beginners --file 2021-05-01-kubernetes-quick-notes-deployment %}
uses for describing how kubernetes handles the different layersof abstraction
is as follows:

- A **Deployment** manages a **ReplicaSet** 
- A **ReplicaSet** manages a **Pod**
- A **Pod** is an abstraction of a **Container**

## References

{% bibliography --cited_in_order --file 2021-05-01-kubernetes-quick-notes-deployment %}