---
layout: post
title: Production ready microservices - review
date: 2020-10-26 01:06:05.000000000 -03:00
image: 
type: article
published: true
status: published
categories:
- code
tags:
- microservices,
---

Microservices are a trend that is growing even more, recently I read the book
"Production-Ready microservices" from Susan J. Fowler and it gave me insights on
how to prepare or at least to have a guide go through when developing
microservices. Besides that, a few chapters can be taken and applied to any application,
for example the reliability section, which says about process and how to
document them for other developers, people on call or other teams.

Here I summarize what I found interesting and what makes sense in my context as
a developer.

## Microservices

The splitting of a monolithic application into microservices is driven by scalability and
efficiency concerns, but microservices introduce challenges of their own.

A successful, scalable microservice ecosystem requires that a stable and
sophisticated infrastructure be in place. In addition, the organizational
structure of a company adopting microservices must be radically changed to
support microservice architecture, and the team structures that spring from
this can lead to siloing and sprawl {% cite susan_fowler_microservices_16 --file 2020-10-26-production-ready-microservices %}.

{% cite sam_newman_19 --file 2020-10-26-production-ready-microservices %} also
argues that micrservices brings challenges, even more, he also mentions that
taking the decision to go with microservices should be something that should
be taken carefully.

## Production-Readiness

## Stability and Reliability

## Scalability and Performance

## Fault Tolerance and Catastrophe-Preparedness

## Monitoring

## Documentation and Understanding

## References

{% bibliography --cited_in_order --file 2020-10-26-production-ready-microservices %}