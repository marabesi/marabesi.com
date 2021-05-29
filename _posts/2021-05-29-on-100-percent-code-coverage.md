---
layout: post
title: On unhandred percent code coverage
date: 2021-05-29 01:06:05.000000000 -03:00
image: 
table_of_contents: 2021-05-29-on-100-percent-code-coverage/table-of-contents.md
type: article
published: true
status: published
categories:
- thoughts
tags:
- coverage,
- TDD,
- test,
- test suite
---

The mindset for testing for developers has changed over the years as the software
industry is evolving. Even though, testing practice is not whide used, it is integrated in the
development cycle of the application. As such, code coverage became a popular subject
among developers and discussions have been rise in order to agree on a consensus of
code coverage.

This post aims to give this discussion a push and share what I think about code coverage,
what I see teams doing and what I understand that is effective or not.

## Test driven develompent

Test driven development has been adopted for developers in order to achieve
high quality software as well as to keep it evolving over time and avoid
the fear of change. Therefore, {% cite tdd_by_example_kent_beck --file 2021-05-29-on-100-percent-code-coverage %}
describes as TDD being a three stage flow (red-green-blue), is not what I
identify in the projects I have worked on.

Most of those projects were using a combination of ITL(interactive test last) or not testing at all,
the test was given to a QA professional. In this scenario, the team wasn't
getting any value at the time to keep the tests up to date or even to
write them. This is a entire discussion that I will not approach here, though,
it is what possibly leads to miss leading metrics. As often management
try to force developers to reach 100% coverage just for the sake of, or because
they saw they could use that to force some kind of behavior on developers.

TDD is a safe net for developers to keep improving the code, communicate intention
and also a culture to follow.

## Quality gates

Quality gates are used to inforce some minimum rules during the software development
life cycle. Among different rules we can list:

- Code linting
- Test suite
- Security checks
- Performance budget

Many would argue that code coverage would have its place, which I agree. We could
use code coverage as a gate to not allow code into production, if the code base
has less than X percentage we fail the release process.  Therefore, besides being
a wuality gate, it should be a indication of the test suite.

The team, should trust the test suite and the coverage should reflect the health
of the suite. Which, in many cases this is not what happens. The common approach
is to target X percent of coverage no matter what.

## References

{% bibliography --cited_in_order --file 2021-05-29-on-100-percent-code-coverage %}