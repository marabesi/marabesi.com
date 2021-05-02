---
layout: post
title: Jest asserts beyond equals
date: 2021-04-25 01:06:05.000000000 -03:00
image: /images/posts/2021-04-25-jest-asserts-beyond-equals/cover.png
type: article
published: true
status: published
categories:
- web
tags:
- jest,
- javascript,
- expect,
- equals,
- toequal,
- async,
- assertion,
- TDD,
- const,
- assert,
- toEqual,
- example,
- callback,
- called,
- test,
- result,
- approach,
- beyond
---

Testing with jest is an activity that developers do to keep the application
maintainable and time proof. Therefore, learning a testing framework
can be a consuming task, often it has many features to master. The assertion
API usually is one of the most important ones, as this is the one that
the developer uses the most during the TDD
{% cite kent_beck_tdd_by_example --file 2021-04-25-jest-asserts-beyond-equals %} flow.

The gist of the assertion API {% cite jest_expect --file 2021-04-25-jest-asserts-beyond-equals %}
is to compare values, as such the equals matcher is the most used. Being one of
the most used can also point to a lack of knowledge in the different matchers
that the testing framework offers.

This post aims to cover different assertions, to avoid using always the matcher
`toEqual` and make the test case more expressive.

## Assertions

This section focuses on the assertions that we can use and alternatives to
"assertion smells". To make this point, the post follows an approach
comparing a `assert.toEqual` approach against a better assertion
for the test case.

### Any

`Any` is a generalization to use when the value of the result is not needed, rather
the type is.

```js
const isNumber = number => number

expect(type of isNumber(2)).toEqual('number')
```

An alternative to this approach would be to use the any:

```js
const isNumber = number => number

expect(isNumber(2)).toEqual(expect.any(Number))
```

### Array Containing

Thinking about `assert.equal`, an approach to assert an entry of arrays, would
be to go through them and assert each of them, for example:

```js
const expectedFruits = ['banana', 'mango', 'watermelon']

expect(expectedFruits[0]).toEqual('banana')
expect(expectedFruits[1]).toEqual('mango')
expect(expectedFruits[0]).toEqual('watermalo')
```

Therefore another approach to assert such structure is using `arrayContaining`:

```js
const expectedFruits = ['banana', 'mango', 'watermelon']

const actualFruits = () => ['banana', 'mango', 'watermelon']

expect(expectedFruits).toEqual(expect.arrayContaining(actualFruits))
```

### to Be

`toBe` is a strictier way of asserting values.

### to Have Length

For checking the size of an array is possible using the `lenght` property. There
are different ways to achieve that, for example, with assert equals, would be
something:

```js
const myList = [1, 2, 3]
expect(myList.length).toEqual(3)   // <---
```

Therefore, jest offers a matcher specifically for that, instead of asserting
the `length` property. The same snippet using `toHaveLength` would become:

```js
const myList = [1, 2, 3]
expect(myList).toHaveLength(3)   // <---
```

### to Be Greater Than

Asserting values grater than otherscan be achieved with raw `assert.equals`,
such as:

```js
const expected = 10
const actual = 3
expect(expected > actual).toEqual(true)
```

The disadivantage here is that when reading the assertion it takes a bit more
to interpret the code in our head. For that, jest offers an assertion that
is more readable to follow (and also gives a more friendly message when failing).

```js
const expected = 10
const actual = 3
expect(actual).toBeGreaterThan(expected)
```

## Modifiers

### not

The not modifier is handy when it comes to assert the negation of a given
sentence. For context, a indication that `.not` is needed would
be asserting false in some result, for example:

```js
const isOff = false
expect(!isOff).toBe(true) // <--- this sometimes is tricky to spot
```

Another way to achieve the same result but being explicity would be
something as follows:

```js
const isOff = false
expect(isOff).not.toBe(true)
```

The `.not` operator can be used across different assertions within jest.

## Async

Jest provides an API for a more readable test code and to assert async
functions. It is easy to fall under the trap of using assert equals after a
promises has been fullfilled, but this is some test smells. 

### resolve

Testing async code comes with challenges and the approach to test also changes.
One way to test is to use the variable that comes from the it callback, something
like:

```js
it('my async test', done => {
  callAsyncFunc().
    then((value) => {
      expect(value).toBe(true)
      done()
    })
})
```

The code above depicts how to assert a value once the promise resolves. Jest
provides a more readable way of doing things with `resolve`:

```js
it('my async test', async () => { // <--- 1
  await expect(callAsyncFunc()).resolves.toEqual(true) // <--- 2
})
```

The same applies to a rejected promise, in this case we would change the `resolves`
by `rejects`.

```js
it('my async test', async () => {
  await expect(callAsyncFunc()).rejects.toEqual(false) // <--- 3
})
```

## Callbacks

Callbacks are the heart of javascript and when testing them an async style
is used as well, as the callback might/might not be called in a different time
in the execution flow.

### to HaveBeen Called

Asserting that a callback has been invoked can be achieved in different ways,
for this purpose the first approach (and not recommend) is to use the
async style as in the previous example:

```js
it('callback has been invoked', done => {
  callAsyncFunc(() => {the 
    expect(true).toEqual(true) <--- assumes it has been called
  })
})
```

A more readable assertion would be using `toHaveBeenCalled`, as it is human
readable and might take less time to undestand what the test case is
asserting

```js
it('callback has been invoked', done => {
  const result = jest.fn() // 1 
  callAsyncFunc(result)

  expect(result).toHaveBeenCalled() // 2
})
```

1. jest uses this spy to assert calls against it
2. assert that the function has been called, regardless of the number of calls

### to Have Been Called Times

Asserting that a function has been called is the most basic assertion in this
respect. There are variants that are more strict than that. For example, it
is possible to assert that a given function have been called X times, as
opposed to `toHaveBeenCalled` that does not match exactly the number of calls.

```js
it('callback has been invoked', done => {
  const result = jest.fn()
  callAsyncFunc(result)

  expect(result).toHaveBeenCalledTimes(4)
})
```

The code above assert that the given spy is called 4 times, any number different
than that will fail the test case.

## References

{% bibliography --cited_in_order --file 2021-04-25-jest-asserts-beyond-equals %}