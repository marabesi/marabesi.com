---
layout: post
title: Rethinking legacy code and testing
date: 2020-09-01 01:06:05.000000000 -03:00
image: 
type: article
published: true
status: published
categories:
- testing
tags:
- code,
- testing,
- development,
- legacy,
- strategy,
- tdd
---

Previously I discussed about legacy code and the strategies to test legacy
code bases {% cite strategy_to_test_legacy_code --file 2020-09-01-rethinking-legacy-code-and-testing %}.
In short the strategy is based
on a code base without any automated tests, the suggested approach is to follow
a strategy starting from an acceptance testing and gradually refactor the code
and get to the unit testing level. Ideally the code base would have several
acceptance tests and then, the refactoring will start replacing the acceptance
test suite with unit tests.

The proposed strategy, is based in a single real world project, which
may not fit all projects. Previously to that, I wrote an introduction to
TDD following the red-blue-green flow {% cite not_using_tdd_part_i --file 2020-09-01-rethinking-legacy-code-and-testing %}
and I also discussed about using TDD as a strategy to improve
the structure of legacy code {% cite not_using_tdd_part_ii --file 2020-09-01-rethinking-legacy-code-and-testing %}.
Though, those are rather technical and focused only on the fact that
the messy code was already there. This post is a reflection on my thinking
and experience since those posts.

## Companies and dead lines

Often, programmers are againt the clock to meet dead lines that usually
are not set by them, the dead line is given by management and there is no
negotiation. The pressure to write code and delivery on time
plays a important role in not allowing the programmer to think and expand
on important areas, such as security, testing and the maintainability of the
code. Everything is for yesterday, everything is late so we need to hurry
and delivery as fast as possible.

The SCRUM era tried to mitigate the time issue, with sprints. Which at some
extent helped teams to self organize and negotiate what will be delivered
in a specific time frame. Of course this is not silver bullet, which 
brings an old known friend, the estimation.

Even though the benefits from having a specific time frame and not anymore
the management imposing a deadline, programmers face the pressure to delivery,
due the lack of the "precise" estimation.

## Developers that don't know testing

Often developers starting their careers are not awere of testing. We can expand
the argument going back to the university, where the testing is focused on a single
event during the development cycle, and usually after the development is done.

The line that is drawn then, goes from the university to the professional life
of new developers. To emphasize the thinking, in the development industry,
testing or quality are often treaded when it comes to delivery.

Which in the "modern" agile software development is a confusion, how can it be
agile without testing? The extreme programming somehow address this issue
pushing towards a responsible development. The developer owns the code and
the responsability of testing the code and ensure its quality.

## Management, often an issue

The link between management and development is in my opinion, difficult. XP is
superior to SCRUM as a base for starting out in agile development
{% cite extreme_programming_martin_fowler --file 2020-09-01-rethinking-legacy-code-and-testing %}.

## References

{% bibliography --cited_in_order --file 2020-09-01-rethinking-legacy-code-and-testing %}
