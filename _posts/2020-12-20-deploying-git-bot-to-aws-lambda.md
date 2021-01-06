---
layout: post
title: Deploying git bot to AWS lambda
date: 2020-12-20 01:06:05.000000000 -03:00
image:
type: article
published: true
status: published
categories:
- aws
tags:
- bref,
- key,
- section,
- credentials,
- command,
- aws,
- access,
- setting,
- php7,
- serverless,
- Serverless,
- php,
- application,
- Stack,
- app,
- bot,
- git,
- deploy,
- api,
- file,
- dependencies,
- AWS
---

Git bot is a monolith application written in slim and it uses twig as a view
render.

## Requirements 

*This section asumes a linux based system (debian/ubuntu), but the commands
presented can be arranged to fit another distros as well.*

The basic setup is to follow the bref documentatino guide on setting things up,
but, this section lists the basic language requirements, version and additional
credentials needed from AWS. The general requirements are as follows:

1. Aws account and security credentials generated (for this post I assume the root account)
2. PHP 7.4+
3. Node Js 14+

The credentials (1) are downloaded from the [aws console](https://console.aws.amazon.com/iam/home?#security_credential){:target="_blank"}
under the section **Access keys (access key ID and secret access key)**. Clicking on
"Create New Access Key" will generate the credentials and download a csv file
with the content.

Installing PHP(2) and its dependencies:

```shell
sudo apt-get install php7.4 php7.4-mbstring php7.4-xml php7.4-dom php7.4-curl
```

Installing Nodejs(3) and its dependencies:

```shell
sudo apt-get install nvm && \
    nvm install node 14 && \
    nvm use 14 \
    npm install -g serverless
```

## Setting up bref

To follow this section is a must to finish the requirements section and to have
the credentials in place.

Setting up bref in a php project is a matter to run the installation command
with composer. For all the commands in this section I assume the working directory
as the one from the cloned repo: `/home/Projects/git-bot-release`.

The following command installs bref and its dependencies, as described in
the official bref documentation
{% cite bref_documentation --file 2020-12-20-deploying-git-bot-to-aws-lambda %}:

```shell
serverless config credentials --provider aws --key YOUR_ACCESS_KEY --secret YOUR_SECRET_KEY
```

Replace **YOU_ACCESS_KEY** by the key in the **AWSAccessKeyId** and **YOUR_SECRET_KEY**
by **AWSSecretKey**. The values for each one are in the security credentials
generated in the previous section.

A successfull response for the command should look like:

```shell
Serverless: Setting up AWS...
```

Finally, for setting up bref to the project run the composer command:

```shell
composer require bref/bref
```

The last command to initialize bref is to run the init script with the following
command:

```shell
vendor/bin/bref init
```

The command will prompt the following question:

```shell
> vendor/bin/bref init

 What kind of lambda do you want to create? (you will be able to add more functions later by editing `serverless.yml`) [Web application]:
  [0] Web application
  [1] Event-driven function
```

As gitbot is a web application I chose `0`, and the response to the input was
as follows:

```shell
Creating serverless.yml
Creating index.php

                                                                                                         
 [OK] Project initialized and ready to test or deploy.                                                   
                                                                                                         
      The files created were automatically added to git.   
```

## Deploying

To deploy the application to aws, the command is:

```shell
serverless deploy
```

Note that the deployment in this stage is done via node and not php. Bref
takes advantage of the work done in the serverless package to automate this step.
This step will deploy the application as it is and the output log looks
like:

```shell
Serverless: Deprecation warning: Starting with next major version, default value of provider.lambdaHashingVersion will be equal to "20201221"
            More Info: https://www.serverless.com/framework/docs/deprecations/#LAMBDA_HASHING_VERSION_V2
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
........
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service app.zip file to S3 (17.35 MB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
..............................
Serverless: Stack update finished...
Service Information
service: app
stage: dev
region: us-east-1
stack: app-dev
resources: 11
api keys:
  None
endpoints:
  ANY - https://jajaj188181.execute-api.us-east-1.amazonaws.com
functions:
  api: app-dev-api
layers:
  None
```

At this point, the deployment is completed and accessing the endpoint provided
should show up the bref logo.

[![bref welcome image](/images/posts/2020-12-20-deploying-git-bot-to-aws-lambda/bref.png "bref welcome image")](/images/posts/2020-12-20-deploying-git-bot-to-aws-lambda/bref.png){:target="_blank"}

## Updating the deployed app and env variables

By default the `serverless.yml` points to a file `index.php` in the root of the
project, therefore, git bot uses the file in the `public/index.php` instead.
Changing the parameter `handler` under `api` fix the index path.

Once the change is in place, the command `serverless deploy` also updates
the app code to reflect the change.

## References

{% bibliography --cited_in_order --file 2020-12-20-deploying-git-bot-to-aws-lambda %}