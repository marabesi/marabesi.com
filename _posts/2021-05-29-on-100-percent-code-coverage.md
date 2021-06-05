---
layout: post
title: On one hundred percent code coverage
date: 2021-05-29 01:06:05.000000000 -03:00
image: /images/posts/2021-05-29-on-100-percent-code-coverage/cover.png
table_of_contents: 2021-05-29-on-100-percent-code-coverage/table-of-contents.md
featured_image: /images/posts/2021-05-29-on-100-percent-code-coverage/featured.jpg
featured_reference: https://wallpapersafari.com/w/HYUtdS
type: article
published: true
status: published
categories:
- thoughts
tags:
- code,
- coverage,
- TDD,
- test,
- test suite,
- testing,
- software,
- development,
- developers,
- quality,
- suite,
- Test,
- percent,
- driven,
- Code,
- rules,
- gates,
- test driven development
---

The mindset for testing for developers has changed over the years as the software
industry is evolving. Even though, testing practice is not wide used, it is integrated in the
development cycle of the application. As such, code coverage became a popular subject
among developers and discussions have been rise in order to agree on a consensus of
code coverage.

This post aims to give this discussion a push and share what I think about code coverage,
what I see teams doing and what I understand that is effective or not.

## Test driven development

Test driven development has been adopted for developers in order to achieve
high quality software as well as to keep it evolving over time and avoid
the fear of change. Therefore, {% cite tdd_by_example_kent_beck --file 2021-05-29-on-100-percent-code-coverage %}
and {% cite martin_fowler_tdd --file 2021-05-29-on-100-percent-code-coverage %}
describes as TDD being a three stage flow (red-green-blue), is not what I
identify in the projects I have worked on.

Most of those projects were using a combination of ITL(interactive test last) or not testing at all,
the test was given to a QA professional. In this scenario, the team wasn't
getting any value at the time to keep the tests up to date or even to
write them. This is a entire discussion that I will not approach here, though,
it is what possibly leads to miss leading metrics. As often management
try to force developers to reach 100% coverage just for the sake of it, or because
they saw they could use that to force some kind of behavior on developers.
James Carr catalogue named this anti-pattern as "The Liar", which Dave Farley
uses as a base line to discuss the subject on his video
{% cite dave_farley_the_liar_pattern --file 2021-05-29-on-100-percent-code-coverage %}.

TDD is a safe net for developers to keep improving the code, communicate intention
and also a culture to follow. As Dave Farley says on his video: practice TDD and
avoid the liar trap.

## Quality gates

Quality gates are used to enforce some minimum rules during the software development
life cycle. Among different rules we can list:

- Code linting
- Test suite
- Security checks
- Performance budget

Many would argue that code coverage would have its place, which I agree. We could
use code coverage as a gate to not allow code into production, if the code base
has less than X percentage we fail the release process.  Therefore, besides being
a quality gate, it should be a indication of the test suite.

The team, should trust the test suite and the coverage should reflect the health
of the suite. Which, in many cases this is not what happens. The common approach
is to target X percent of coverage no matter what.

## Avoiding wrong metrics

My experience tells that for many developers tests are a matter of needed, kind
of obligation. They write the tests not because they want to be proud of the
work they do, or because they want to give the next developer (that will
maintain that in the future) a hint on what the code was built to support or
not.

As such managers, try to enforce the idea that forcing developers to
reach X percentage of coverage will increase the code base quality.
{% cite emily_bache_refactoring_kata --file 2021-05-29-on-100-percent-code-coverage %}
recorded a 3 series video going through the famous Gilded Rosa kata, which
to goal is to refactor the code given. Around the minute 15:59 of the first
video she depicts an issue in the tests that she had. Even though she
changed a critical parte of the production code, the tests were passing. The
code had one hundread pecent coverage. It was not giving the desired feedback.

Of course it was a kata and she beautifuly depicts this problem as she goes
through the code.

Still, I see developers making they proud of themselves because they have X
percentage of coverage.

This video series alone points how useless matric of X percentage coverage is.

## References

{% bibliography --cited_in_order --file 2021-05-29-on-100-percent-code-coverage %}