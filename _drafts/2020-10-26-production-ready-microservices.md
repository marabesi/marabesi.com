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
microservices. Susan says on the book that this is a guide that she whish
she had when she started to standardize the microservices at user, in this
sense the collection is tested in a "production" like environment and
in a big size company.

Besides that, a few chapters can be taken and applied to any application,
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
argues that microservices brings challenges, even more, he also mentions that
taking the decision to go with microservices should be taken carefully.

She goes into the first chapter of the book, discussing the monolith approach of building
an application, using a layered architecture (in this case a three tier with
the frontend, backend and the database) and the possible strategies to
scale this application due an event of an increasing demand.

## Production-Readiness

On the other hand {% cite susan_fowler_microservices_16 --file 2020-10-26-production-ready-microservices %}
rises the point, that the largest challenges that microservices bring
is the need for standardization of the architecture.

## Stability and Reliability

## Scalability and Performance

## Fault Tolerance and Catastrophe-Preparedness

## Monitoring

## Documentation and Understanding

Documentation is the biggest challenge while developing software, at least
in the projects I got involved with. There are at least three reasons for that,
the first being the constant change of a feature, the second is due the lack
of awareness of the team that documentation is important to keep everyone on the
team on the same page, and lastly but not least it is the excuse: "it doesn't
matter".

## References

{% bibliography --cited_in_order --file 2020-10-26-production-ready-microservices %}