---
layout: post
title: Getting started with testing (PHP and javascript) - PART 1
date: 2020-05-23 01:06:05.000000000 -03:00
image: 
type: article
published: true
status: published
categories:
- testing
tags:
- testing,
- unit,
- programming,
- tests,
- tools,
- libraries,
- development,
- software,
- tools,
- theory
---

Testing has its place in the development phase, often related as unit
testing since the programmer write test cases for the smallest part of the
code, such as a method of a class or a function. Therefore, to reach a level
of confidence and write tests as a routine during the development cycle
is a challenge for many programmers.

The aim here is to give a guide line to get started with unit testing, and
to reach a level of confidence to improve the development cycle, thus the
programmer productivity.

## Prerequisites

The first step to star get into the unit testing, is to chose a programming
language that you are comfortable with.

The foundation is the same, as mentioned in the introduction, though, tools
for each programming language vary, meaning, each programming language
has its own tools and conventions to write unit tests (even tough the theory that
underlies it is the same).

Make sure to have at least one year of experience in any programming language,
and at least developed an application of any kind. This may setup the
ground to ease the path of unit testing.

### Programming languages, tools and frameworks

Tools for testing vary based on the programming language and on the framework
as well. For PHP for example, one of the most used libraries to write
unit tests is PHPUnit. For java is Junit and for javascript the libraries are
categorized in two: front end and backend.

Javascript has more granularity compared to JUnit and PHPUnit, the ecosystem provides
libraries for assertion and libraries for running the tests, as opposed to PHPUnit
and JUnit that has this feature built-in. Though, it is possible to also find the same
behavior in the javascript ecosystem as well.

## Foundation on testing

As a beginner on the the testing subject, there are more questions than answers. Which is
fine and a good starting point. This section provides references for understanding the
foundation of testing, but not just the theory, the practice as well.

The first recommended read of this section, if you are the developer that prefers to see a mix of the code
and the theory is: Software Testing: From Theory to Practice {% cite sttp --file 2020-05-23-getting-started-with-testing-guide %}
and then TDD by example {% cite tdd_by_example_kent_beck --file 2020-05-23-getting-started-with-testing-guide %}.

On the other hand if you prefer to digest more theory and then later on go deeper
into the practical aspect of it, then the suggested reading is:
Software Engineering Tenth edition by Ian Sommerville {% cite software_engineering_tenth_edition_ian_sommerville --file 2020-05-23-getting-started-with-testing-guide %}.

Whichever you picked first, once it is done, go to the next one before proceeding
to the next set of references.

For a deep dive into the software testing, the recommended reading is
The Art of Software Testing {% cite the_art_of_software_testing --file 2020-05-23-getting-started-with-testing-guide %}.

## References

{% bibliography --cited_in_order --file 2020-05-23-getting-started-with-testing-guide %}