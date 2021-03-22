---
layout: post
title: Strategies to test legacy code - PART 1
date: 2019-01-14 01:06:05.000000000 -03:00
image: /images/posts/2019-01-14-strategies-to-test-legacy-code/cover.jpg
type: article
published: true
status: published
categories:
- javascript
tags:
- test,
- acceptance,
- code,
- unit,
- suite,
- change,
- testing,
- developer,
- class,
- refactoring,
- software,
- refactor,
- strategies,
- legacy code,
- acceptance test,
- confidence,
- strategy,
- slow,
- pyramid,
- unit test
redirect_from:
  - /strategies-to-test-legacy-code
---

Often developers have to deal with code base without test, which might lead
to disconfort in maintaining the code base. In one hand there is the business
that needs a new feature or a bug fix ready for the users to use, and in
the other hand there is the developer without a guide to make sure that
the change in the code doesn't make any side effect.

To refactor is the ability to change the code, without affecting it's
behavior {% cite martin_fowler_existing_code_18 --file 2019-01-14-strategies-to-test-legacy-code %}.
If the code is changed and it's beahvior change, it is not
refactoring, it is changing code without confidence.

The following content aims to define strategies to refactor existing
code without tests. Taking into account two basic rules, also named in
{% cite codurance_legacy_code --file 2019-01-14-strategies-to-test-legacy-code %}:

1. Don't change existing code without a test first
2. Boy Scout Rule - improving the code you need to touch

## Edit 27, 2019 - MadridJs talk

<iframe src="//speakerdeck.com/player/bf58fda1a16f40bcbf881d6efbfa77c5" width="100%" height="399" style="border:0; padding:0; margin:0; background:transparent;" frameborder="0" allowtransparency="true" allowfullscreen="allowfullscreen" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

## Acceptance testing

The acceptance testing is, compared to the unit test slower to run and depends
on the integration of many components, it is the test that simulates a user
interacting with the application.

Often the acceptance testing (UI Tests) is used with a web driver, to open a browser and
start to reproduce the events that an user would have done {% cite selenium_driver --file 2019-01-14-strategies-to-test-legacy-code %}.

The pyramid of test {% cite test_pyramid --file 2019-01-14-strategies-to-test-legacy-code %} though,
gave it a label of being slow and that depends on integration to be possible to
test. 

![Test pyramid. Font: https://martinfowler.com/articles/practical-test-pyramid.html](https://martinfowler.com/articles/practical-test-pyramid/testPyramid.png "Test pyramid. Font: https://martinfowler.com/articles/practical-test-pyramid.htm"){:target="_blank"}

There are at least two reasons for
acceptance test be considered slow, the first is the need to use a web drive,
which creates a real browser environment to execute the test. The second is
related to the first, wich requires for each test to reset the browser instance. 
The recommended approach is to have a few acceptance tests as possible.

## Unit test

The unit test is the test that tests the smallest part in the code, often
referred as a function. The unit tests is the test written by the developer
along the production code, following the pyramid test {% cite succedding_with_agile_10 --file 2019-01-14-strategies-to-test-legacy-code %}, the unit test
is the type of test that should have the higher amount in the suite.

Unit test are fast to run and gives fast feedback to the developer while
writing the program. The opposite of acceptance testing.

## Defining a strategy

The first strategy to approach testing in legacy systems is to start by writing
acceptance testing via web driver.

The flow is to get confidence in as many scenarios as possible, in a way that
is possible to refactor the code with confidence. In PHP for instance, is possible
to use codeception. is recommended to follow the TDD metodology even with
acceptance test, the flow would be resumed in:

1. Write acceptance test
2. Refactor the code to be possible to add unit test
3. Execute the acceptance test

The pro is to have a few testes which gives the developer confidence in
refactoring in as many scenarios as possible, in the other hand acceptance test
is slow to execute. Even a small change would take a few minutes to execute the
suite.

![TDD applied to acceptance](/images/posts/2019-01-14-strategies-to-test-legacy-code/strategies-1.png){:target="_blank"}

## Iterating over the strategy

Having acceptance test in place is a start to start improving the test strategy.
As mentioned before acceptance test is slow to execute, in addition it should
be a few as possible in the test suite.

The acceptance test in the scenario gives the developer more conficen to start
refactoring, where the goal to achive is to increase the unit test based on the
acceptance test suite.

For each acceptance test is recommended to start to substitute the acceptance
test with the unit test doing refactoring, the recommended approach would be:

1. Identify which classes are touched by the acceptance test
2. Pick one class and start to refactoring with the unit test
    1. If the class does't have a unit test, create a class for it
    2. If the class already have a unit test class, start to write the test
3. Repeat step 2 until all acceptance tests is converted into unit test

The last part is to remove specific cases in the acceptance testing suite, and
keep only the general ones, which covers the most basic flow.

![Iterating over the strategy](/images/posts/2019-01-14-strategies-to-test-legacy-code/strategies-2.png){:target="_blank"}

It is possible to keep with all the acceptance test suite in place as well,
just the execution approach would change from a developer point of view.

Once the unit test suite is good enough to have confidence, the developer at
each change would execute the suite to have feedback on the change. Whereas in
the acceptance suite would be executed only once the refactor is done.

## References

{% bibliography --cited_in_order --file 2019-01-14-strategies-to-test-legacy-code %}