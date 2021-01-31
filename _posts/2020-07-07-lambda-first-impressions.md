---
layout: post
title: Lambda (AWS) - first impressions
date: 2020-07-07 01:06:05.000000000 -03:00
image: /images/posts/2020-07-07-lambda-first-impressions/cover.jpg
type: article
published: true
status: published
categories:
- web
tags:
- lambda,
- Lambda,
- data,
- aws,
- AWS,
- user,
- export,
- request,
- time,
- scalability,
- web,
- application,
- PHP
---

Lambda has been a hot topic for a while, the proposal is hold in three main
subjects (but not limited to): pay for what you execute only, scalability and composition
(compose with different services such as, AWS s3, Kinesis, IoT etc).
Lambda has changed how users think about cloud computing, giving the end user
the power to chose and to pay for what is indeed executed.

Out of the box, AWS supports different programming languages such as: nodejs,
python, java, ruby, c#, go and powershell {% cite lambda_supported_programming_languages --file 2020-07-07-lambda-first-impressions %}.

Unfortunately PHP is not supported as a default language, but, bref is a open source project
that gives PHP projects the layers needed to run on lambda.

Even though lambda is the trend, usually the question that comes to mind is what are
the use cases for lambda, the next section tries to throw some light on this topic
based on my experience and also on the references throughout this post.

## Use case, for export data

Usually the standard setup to export a data from a given database is to build an application
(it can be an API or a monolith) that receives the request from the user. The
request contains the metadata needed for exporting the data, for example, the
time range wanted, which data, and probably more meta information.

The request is made, once the application receives the request, it dispatches an
asynchronous job in the backend to process the data. The async task is important
for two reasons:

1. The data can take time to load/export, which in turn would make the user waiting for a long period of time.
2. Usually requests for servers have built-in timeout to avoid time consuming requests.

So far we have been discussing the challenges to implement a simple export data feature.
Which can be accomplished by any modern language. Let's give a concrete tech stack for our problem, we
are going to export data using PHP, MySQL and rabbitMq.

For this scenario, the overall architecture looks like the following:

<!-- place image here, first arquicture overview -->

For this given scenario, the feature would work, therefore, we can name a few scalability issues.
For each user a job is dispatched into the queue, and for each message, the worker picks up one
process it and then once it is done, the worker picks the next in the queue. Which for an application,
the has more than once user would have a negative impact. The following image depicts the described
scenario.

<!-- place the image that illustrates the issue -->

The only way to scale the service up and remove this limitation is to spawn more workers, which would require
extra work from the operations.

Lambda comes in, to remove this burden of scalability issue, lambda makes it automatically, the followings
image depicts the new architecture using lambda.


<!-- describe here when it can help with lambda -->

## Cons

Even though lambda is a solution that helps teams to delivery scalable software the down side is that
the technology is highly coupled to a specific vendor, for example, AWS has lambda, Azure has azure functions
and those are not interchangeable, for each once of them there are specific implementations.

## References

{% bibliography --cited_in_order --file 2020-07-07-lambda-first-impressions %}
