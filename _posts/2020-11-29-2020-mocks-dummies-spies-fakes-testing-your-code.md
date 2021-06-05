---
layout: post
title: Mocks, dummies, spies, fakes - testing your code
date: 2020-11-29 01:06:05.000000000 -03:00
image: /images/posts/2020-11-29-2020-mocks-dummies-spies-fakes-testing-your-code/cover.png
type: article
published: true
status: published
categories:
- development
tags:
- test,
- Test,
- testing,
- system,
- mock,
- Mocks,
- mocks,
- dummies,
- spies,
- Spies,
- fakes,
- Fakes,
- code,
- doubles,
- Dummies,
- stubs
redirect_from:
  - /development/testing/mocks-dummies-spies-fakes-testing-your-code
--- 

Testing code has different definitions and sometimes can mean different things for
different people. this post is a collection for
easy to come back definitions on mocks, dummies. stubs, spies and fakes.

## Table of contents

2. [Mocks/Test doubles](#mockstest-doubles)
2. [Dummies](#dummies)
3. [Stub](#stub)
4. [Spies](#spies)
5. [True mocks](#true-mocks)
6. [Fakes](#fakes)
7. [References](#references)

## Mocks/Test doubles

Mock is frequent used interchanbealy with the term test double, mock is often
used for people that didn't read the paper definition of mock. Then, developers got used to the term mock
instead of test double. Mocks, refers to the whole family of objects that are
used in tests

## Dummies

You pass in something, and you don't care who it is used, often the object is not used at all.

## Stub

Opposed to dummies, stubs are objects created in a way that you do care how they are used. For example,
to tricky an authorization to test if the user ca/can't do certain actions in the system.

## Spies

To assert that a method was called by the system under test, as the post by {% cite the_little_mocker --file 2020-11-29-2020-mocks-dummies-spies-fakes-testing-your-code %}:
"You can use Spies to see inside the workings of the algorithms you are testing".

## true mocks

Is interested in the behavior, instead of return of functions. It cares about which functions were invoked,
with what arguments and how often. 

## Fakes

Fakes have business logic, so it can drive the system under test with different sets of data.

## References

{% bibliography --cited_in_order --file 2020-11-29-2020-mocks-dummies-spies-fakes-testing-your-code %}