---
layout: post
title: Jest timers and reactjs
date: 2021-04-04 01:06:05.000000000 -03:00
image: /images/posts/2021-04-04-jest-timers-and-reactjs/cover.jpg 
table_of_contents: 2021-04-04-jest-timers-and-reactjs/table-of-contents.md
type: article
published: true
status: published
categories:
- web
tags:
- reactjs,
- jest,
- timers,
- fake,
- test,
- time,
- Scene,
- use,
- describe,
- wrapper,
- suite,
- beforeEach
---

This post explores the possibilitites to use fake timers with jest. Such
feature is needed for async testing, whreas is needed to await for
some computation to finish. Such computation can vary on time, for example,
1 second, or 10 minutes. In a test case scenario, the waiting for this
computation is not needed {% cite jest_fake_timer --file 2021-04-04-jest-timers-and-reactjs %}.

Jest offers fake times, to advance in time or run peding computations
without the need to wait for them to complete. Jest is not used in reactjs
projects only, therefore, the examples used here use reactjs as
a library to build web interfaces. For pure nodejs examples with times
it is recommended to go to the official documentation {% cite jest_fake_timer --file 2021-04-04-jest-timers-and-reactjs %}.

Dave Farley in his webinar about acceptance testing also recommends this approach
for controlling time variables {% cite  dave_farley_acceptance_testing --file 2021-04-04-jest-timers-and-reactjs %}, Dave shows code
examples in java, which spot this idea of controlling time across
programming languages, the concept is the important bit.

> NOTE: this post assumes testing knowledge as well as jest features, such as:
> describe and test.

## Context

The react component used in this post is a component that display different
content basedon the props given, and also, it uses animation to introduce
them. as such, the animation takes time to finish and to complete its
life cycle. Jest timers are used to avoid the needed to delay the test
suite execution. For further details on the test file and implementation refer
to:

- [Scene.spec.tsx (test)](https://github.com/marabesi/testable/blob/master/webapp/src/components/ui/interface/scene-manager/Scene.spec.tsx){:target="_blank"}
- [Scene.tsx (implementation)](https://github.com/marabesi/testable/blob/master/webapp/src/components/ui/interface/scene-manager/Scene.tsx){:target="_blank"}

## Fake times

The first step to use the fake timers is to have them set. There are two options
to achieve that. The first one is to call `useFakeTimers`:

```javascript
jest.useFakeTimers();

describe('my test suite', () => {
  // test cases
})
```

The second options is to set the function inside the `beforeEach`:

```javascript
describe('my test suite', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  })

  // test cases
})
```

The second option is the prefered one if the test suite has multiple tests
that depends on the timer, as the official jest documentation says:

> If running multiple tests inside of one file or describe block, **jest.useFakeTimers()**
> can be called before each test manually or with a setup function such as
> **beforeEach**. Not doing so will result in the internal usage counter not being reset.

On the other hand, the first approach has no way to reset the mocks set, for
achieve that we would have to make use of the function **afterAll** from jest.
All in all,  the approach used for the post is the following:


```javascript
describe('my test suite', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  // test cases
})
```

## Run all timers

```jsx
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'
import Scene from './Scene'

describe('Scene component', () => {

  beforeEach(() => {
    jest.useFakeTimers();
  })

  afterEach(() => {
    jest.restoreAllMocks();
  })

  test('should handle next scene', () => {
    const handleLastScene = jest.fn() 
    const handleNextScene = jest.fn()

    const wrapper = mount(
      <Scene
        lastScene={false}
        handleLastScene={handleLastScene}
        next={handleNextScene}
        text={fakeText}
        showNextButton={1}           // Time in milliseconds to display the button
        releaseButton={1}            // TIme in milliseconds to enable the interaction with the button
      />
    )

    act(() => {
      jest.runAllTimers();           // Run all peding timers (setTimeout, setInterval, clearTimeout, clearInterval)
    })

    wrapper.update()
    wrapper.find(Button).simulate('click')

    expect(handleLastScene).toHaveBeenCalledTimes(0)
    expect(handleNextScene).toHaveBeenCalled()
  })
})
```

In the test case, the button depends on two specific timers, one for
displaying the button and the other one to enable the interaction with
the button again. The latter is to prevent to call the button events twice
or even more times.

`runAllTimers` as specified in the jest documentation, is desired to use
when there is no recursive timers, otherwise `runAllTimers` will end up
in a endless loop {% cite jest_fake_timer --file 2021-04-04-jest-timers-and-reactjs %}.

## Advance timers by time

Another approach to use in the test case provided in the previous section
would be to use `advanceTimersByTime`. As long as the time provided by the
function is greater than the time passed in `showNextButton`, it should
work. For example:

```jsx
// imports and describe have been removed, this snippet
// focus on jest.advanceTimersByTime only
test('should handle next scene', () => {
  const handleLastScene = jest.fn() 
  const handleNextScene = jest.fn()

  const wrapper = mount(
    <Scene
      lastScene={false}
      handleLastScene={handleLastScene}
      next={handleNextScene}
      text={fakeText}
      showNextButton={1}
      releaseButton={1}
    />
  )

  act(() => {
    jest.advanceTimersByTime(2000);               // advance time by 2 seconds
  })

  wrapper.update()
  wrapper.find(Button).simulate('click')

  expect(handleLastScene).toHaveBeenCalledTimes(0)
  expect(handleNextScene).toHaveBeenCalled()
})
```

Using `advanceTimersByTime` advance all timers as well as recursive timers. Both
of the approaches depicted work without having to wait for the actual time
to pass, thus, the test suite runs as fast as it can and there is no
"real" delay.

## References

{% bibliography --cited_in_order --file 2021-04-04-jest-timers-and-reactjs %}