---
layout: post
title: Clean architecture
date: 2020-05-22 01:06:05.000000000 -03:00
image: 
table_of_contents: 2020-05-22-clean-architecture/table-of-contents.md
type: article
published: true
status: published
categories:
- architecture
tags:
- architecture,
- clean,
- hexagonal,
- code,
- approach,
- book,
- Screaming architecture,
- DCI,
- BCE
---

Separation of consern, isolating pieces of code that repeats and decoupling
responsabilities from differents parts of the code base seems to be a
common approach among experienced developers. Therefore, through the experience
comes the opinionated approach, some developers might decide to create
specific directories or others might use longer file names to express intent.

I have published my own thoughts on that matter as well, and then I discovered
the clean architecture book {% cite clean_architecture_book --file 2020-05-22-clean-architecture %},
which dives much deeper on that subject and also explores the pros of
having a architecture in place.

## Architectural styles compared to the clean architecture

As I first started my path through the clean architecture I often found asking myself: is
hexagonal architecture {% cite hexagonal_architecutre --file 2020-05-22-clean-architecture %}
the same as clean architecutre? The clean architecture, shares decisions compared
with the hexagonal architecture, as {% cite clean_architecture_article --file 2020-05-22-clean-architecture %}
states that the clean architecture is an attempt to integrate the hexagonal
architecture and other as well, named:

1. Hexagonal architecture / Onion architecutre
2. Screaming architecture
3. DCI
4. BCE

The clean architecture is an attempt to combine those styles together to produce
an output.

## Clean architecture in a glance

Clean architecture focuses on the separation of concerns and also it takes
care of the evolution of the code, the evolution is one of key aspects of the
clean architecture as it has a dedicated section in the first chapter, "The Total Cost of Owning a Mess",
{% cite clean_architecture_book --file 2020-05-22-clean-architecture %}
that depicts the fact that the productivity degrades as the time goes. Which
is caused by the lack of care with code and also the software maintainability. 
The following diagram taken from {% cite clean_architecture_article --file 2020-05-22-clean-architecture %}
depicts the clean architecture overview.

[![Clean architecture diagram](/images/posts/2020-05-22-clean-architecture/CleanArchitecture.jpg)](/images/posts/2020-05-22-clean-architecture/CleanArchitecture.jpg){:target="_blank"}

The structure I am following next is the same presented by {% cite clean_architecture_article --file 2020-05-22-clean-architecture %},
so then I can follow some line of thought, besides that I also give my contribution
to each section.

### The dependency rule

The depdency rule follows basicaly the same principle as the layered architecture.
{% cite software_architectural_patterns --file 2020-05-22-clean-architecture %}. Anything
in the inner circle should not know anything about the outer circle, the same principle
in the layered architecture, to keep layers following a same direction.

### Entities

Entities are the objects that represents the business.

### Use cases

Use cases are the business rule that the application executes. Here is the place
to add the business logic. In a comparison with MVC, the use case, is the place
as where the controller is.

### Frameworks and adapters

Opposed to what MVC frameworks impose in the architecture for web applications,
the clean architecture does not take the framework as something that is the core
of the application, instead the framework is something that is a "implementation
detail", meaning that it is possible to change the framework choice if needed,
without impacting the use cases. The same way as the framework is a detail
the database is as well {% cite clean_architecture_article --file 2020-05-22-clean-architecture %}.

## Implementaion details

The book comes with code examples to ilustrate the scenarios and also to make
statements on the point being made, therefore, there is no folder structure,
file name convention or waht so ever to "glue the pieces together". This is a
point to improve, but not necessary in the book. I would argue that for any programmer
with a few years of experience, the concepts given are understandable, but
there are programmers like me that like some sort of guide lines so the
it is possible to compare implementations.

{% cite hands_dirty_on_clean_architecture --file 2020-05-22-clean-architecture %}
provides a implemention of clean architecture using java. It goes along the
clean architecture definitions and depicts folder structure, files, boundaries,
abstractions and also reinforce definitions on the use cases.

## References

{% bibliography --cited_in_order --file 2020-05-22-clean-architecture %}

<!-- 12 factors to consider when chosing frameworks https://www.zend.com/blog/php-frameworks-top-12-factors-consider
student summary: http://courses.cecs.anu.edu.au/courses/CSPROJECTS/19S2/reports/u6052043_report.pdf
another student summary: http://courses.cecs.anu.edu.au/courses/CSPROJECTS/19S1/reports/u6022913_report.pdf
https://www.youtube.com/watch?v=5OjqD-ow8GE GOTO 2018 - Modular Monoliths - Simon Brown -->