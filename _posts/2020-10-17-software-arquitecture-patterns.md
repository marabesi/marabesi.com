---
layout: post
title: Software arquitecture patterns
date: 2020-10-17 01:06:05.000000000 -03:00
image: 
type: article
published: true
status: published
categories:
- architecture
tags:
- architecture,
- pattern,
- based,
- one,
- microkernel,
- applications,
- product,
- application,
- concept
---

This is a short post on the book Software architecture patterns by Mark Richards,
published by O'Reilly. The book catalogs five architectural styles: Layered,
Event-Driven, Microkernel, Microservices and Space-Based. For each of them
the author goes through six aspects and rank them
{% cite software_architectural_patterns --file 2020-10-17-software-arquitecture-patterns %}, that collects a broader
named:

- Overall agility
- Ease of deployment
- Testability
- Performance
- Scalability
- Ease of development

The book covers in high level scenarios for each pattern to be used and also
diagrams that helps the reader to understand the details. Therefore, the book
does't have code examples or concrete implementations, which might open the
definition to different implementations. Furthermore, for building up this material
I used heavily the content provided by the original author. For each arquitectural
style I used the original definition, and in addition to that, I merged my
thouthgs on each one of them.

## Layered

Components within the layered architecture pattern are organized
into horizontal layers, each layer performing a specific role within
the application. Popular frameworks for any language that uses the MVC (3 layers) as
a foundation usually are bound to the layered architecture.

One of the powerful features of the layered architecture pattern is
the separation of concerns among components.

The layers of isolation concept means that changes made in one
layer of the architecture generally don’t impact or affect components
in other layers, which in the MVC style follows this definitions. The
view is the layer that display data and receives the user interaction,
the controller handles the data from the view, and the model intereacts
with the database.

Web frameworks that follows this approach:

- Laravel
- CakePHP
- Codeigniter

## Event-driven

The event-driven architecture pattern is a popular distributed
asynchronous architecture pattern used to produce highly scalable
applications

The event-driven architecture pattern consists of two main topolo‐
gies, the mediator and the broker

The event-driven architecture pattern is a relatively complex pattern
to implement, primarily due to its asynchronous distributed nature.

## Microkernel

The microkernel architecture pattern (sometimes referred to as the
plug-in architecture pattern) is a natural pattern for implementing
product-based applications. A product-based application is one that
is packaged and made available for download in versions as a typical
third-party product.

The core system of the microkernel architecture pattern tradition‐
ally contains only the minimal functionality required to make the
system operational.

Perhaps the best example of the microkernel architecture is the
Eclipse IDE. However, once you start adding
plug-ins, it becomes a highly customizable and useful product. Another
example is [wordpress](https://wordpress.com){:target="_blank"}, users can
download as many plugins as needed.

One great thing about the microkernel architecture pattern is that it
can be embedded or used as part of another architecture pattern.

For product-based applications, the microkernel architecture pat‐
tern should always be your first choice as a starting architecture.

## Microservices

The microservices architecture pattern is quickly gaining ground in
the industry as a viable alternative to monolithic applications and
service-oriented architectures.

The first of these concepts is the notion of separately
deployed units. Perhaps the most important concept to understand with this pattern
is the notion of a service component.

Designing the right level of service component granularity is
one of the biggest challenges within a microservices architecture.

Another key concept within the microservices architecture pattern
is that it is a distributed architecture, meaning that all the compo‐
nents within the architecture are fully decoupled from one other
and accessed through some sort of remote access protocol (e.g.,
JMS, AMQP, REST, SOAP, RMI, etc.).

While there are literally dozens of ways to implement a microservi‐
ces architecture pattern, three main topologies stand out as the most
common and popular: the API REST-based topology, application
REST-based topology, and the centralized messaging topology.

## Spaced-based

In any high-volume application with an extremely large concurrent
user load, the database will usually be the final limiting factor in
how many transactions you can process concurrently.
The space-based architecture pattern is specifically designed to
address and solve scalability and concurrency issues.

This pattern gets its name from the concept of tuple
space, the idea of distributed shared memory. High scalability is
achieved by removing the central database constraint and using
replicated in-memory data grids instead.

The space-based architecture pattern is a complex and expensive
pattern to implement. It is a good architecture choice for smaller
web-based applications with variable load (e.g., social media sites,
bidding and auction sites).

## References

{% bibliography --cited_in_order --file 2020-10-17-software-arquitecture-patterns %}
