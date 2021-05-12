---
layout: post
title: e2e testing with Cypress, ReactJs and Firebase
date: 2019-10-13 01:06:05.000000000 -03:00
table_of_contents: 2019-10-13-cypress-and-firebase-reactjs-app/table-of-contents.md
image: 
type: article
published: true
status: published
categories:
- test
tags:
- web,
- js,
- redux,
- javascript,
- reactjs,
- ReactJs,
- e2e,
- cypress,
- Cypress,
- testing,
- test,
- solution,
- docs,
- firebase,
- Firebase,
- Online,
- github,
- sdk,
- https,
- store,
- Redux
---

Cypress is a e2e testing tool that interacts with chrome based browsers (and electron) to
execute its test suite **[1]**. E2e testing is known by its complexity, and often it is
related to the top in the test pyramid **[2]**.

The complexity comes from the amount of work and setup to do before performing the
test itself. To put in context, unit test usually is the easiest in the spectrum,
whereas the developer write test methods to cover a class behavior. The setup
to be done is the smallest.

The havy setup is due the interaction between components, in a e2e testing, everything
is working the "production" way. Often this behavior is not desired, for that
Cypress provides a mock library. For example, the `cy.route` is used to mock
network requests. Using the network mock, prevents the need to setup a entire
backend to interact with the web app **[3]**.

## Firebase

Firebase is a library maintained by Google, which has many products inside it.
In specific the real time database (or its newer version: firestore) is a Firebase
product that allows developers to write real time applications.

It has a vast library that integrates with many programming languages, the firebase
app has support for iOS, Android and Web (javascript) **[4]**. The server side supports more technologies **[5]**.

## Cypress and Firebase

Web applications that uses Firebase as a service to provide real time database
integration have a challenge beyond the `cy.route` that Cypress provides.
Firebase uses a specific protocol to communicate with its server, which is not a
ajax requests. In this sense, using `cy.route` is not effective, as it is
based on ajax requests only.

## Proposed solution: redux and ReactJs

The first alternative is Redux **[6]**. Redux provides a pattern to abstract the
data of the application from the UI. In this sense, acting in the data part
reflects the UI due its separation of concerns. Redux is a implementation of
Flux a pattern, a one way flow to mutate data **[7]**.

This solution, depend on the redux understanding. In other words, redux is a must.
Applications that use Firebase and ReactJs only, can't benefit. If that is the
case there are solutions that try to tackle this case **[8][9]**.

To follow on the ReactJs and the redux solution, the app must follow two
basic rules:

1. Calls to the firebase API must be inside reducers
2. The app must depend on the redux state only

The next step is to expose the redux store through the `window` object. This step
is required, so Cypress can access the store and commit actions to change the
state as needed **[12]**.

This solution is interesting, as it isolates the dependency from Firebase. It
is like `cy.route` in this sense. Testable is a project that follows this approach
**[11]**. To understand the big picture of the implementation is recommended
to check the [`userReducer.js`](https://github.com/marabesi/testable/blob/master/webapp/src/data-flow/redux/reducers/userReducer.ts){:target="_blank"},
this file follows the first rule. In addition to the the file [`index.js`](https://github.com/marabesi/testable/blob/master/webapp/src/index.tsx){:target="_blank"} exposes the store to the `window` object, as described before.

The second rule can be checked in the `pages` and `components` directory, as
all of them should't dispatch Firebase interactions.

Interesting enough, exposing the store to the `window` object might fit other
libraries/frameworks as well. This approach is not related to ReactJs + Redux only,
but to any Flux implementation. As an example, Vuex can also benefit from this approach.

## Related work

Previous work have shown that the solution proposed in the previous sections is
effective to remove the dependency from Firebase. Indeed, **[10]** has a step by
step tutorial in how to achieve that.

## References

[1] [Online]. Available: [https://docs.cypress.io/guides/core-concepts/launching-browsers.html#Browsers](https://docs.cypress.io/guides/core-concepts/launching-browsers.html#Browsers){:target="_blank"}

[2] Ham Vocke, 'The Practical Test Pyramid', 2018. [Online]. Available: [https://martinfowler.com/articles/practical-test-pyramid.html](https://martinfowler.com/articles/practical-test-pyramid.html){:target="_blank"}

[3] [Online]. Available: [https://docs.cypress.io/guides/guides/network-requests.html#Testing-Strategies](https://docs.cypress.io/guides/guides/network-requests.html#Testing-Strategies){:target="_blank"}. [Accessed: 31 - Oct - 2019]

[4] [Online]. Available: [https://firebase.google.com/docs/ios/setup](https://firebase.google.com/docs/ios/setup){:target="_blank"}. [Accessed: 31 - Oct - 2019]

[5] [Online]. Available: [https://firebase.google.com/docs/admin/setup#add_the_sdk](https://firebase.google.com/docs/admin/setup#add_the_sdk){:target="_blank"}. [Accessed: 31 - Oct - 2019]

[6] [Online]. Available: [https://redux.js.org](https://redux.js.org){:target="_blank"}. [Accessed: 31 - Oct - 2019]

[7] [Online]. Available: [https://facebook.github.io/flux/docs/in-depth-overview](https://facebook.github.io/flux/docs/in-depth-overview){:target="_blank"}. [Accessed: 31 - Oct - 2019]

[8] [Online]. Available: [https://github.com/prescottprue/cypress-firebase](https://github.com/prescottprue/cypress-firebase){:target="_blank"}. [Accessed: 31 - Oct - 2019]

[9] [Online]. Available: [https://github.com/cypress-io/cypress-example-recipes/issues/118](https://github.com/cypress-io/cypress-example-recipes/issues/118){:target="_blank"}. [Accessed: 31 - Oct - 2019]

[10] [Online]. Available: [https://www.cypress.io/blog/2018/11/14/testing-redux-store/#drive-using-the-dom](https://www.cypress.io/blog/2018/11/14/testing-redux-store/#drive-using-the-dom){:target="_blank"}. [Accessed: 31 - Oct - 2019]

[11] [Online]. Available: [https://github.com/marabesi/testable/tree/master/webapp](https://github.com/marabesi/testable/tree/master/webapp){:target="_blank"}. [Accessed: 31 - Oct - 2019]

[12] [Online]. Available: [https://stackoverflow.com/a/52590453/2258921](https://stackoverflow.com/a/52590453/2258921){:target="_blank"}. [Accessed: 31 - Oct - 2019]