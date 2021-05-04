---
layout: post
title: Towards a reactjs folder structure based on intent (WIP) 
date: 2021-01-18 01:06:05.000000000 -03:00
image: /images/posts/2021-01-18-towards-reactjs-folder-structure-based-on-intent/cover.png
type: article
published: true
status: published
categories:
- web
tags:
- reactjs,
- structure,
- reactjs,
- js,
- json,
- folder,
- components,
- ui,
- UI,
- intent,
- communication,
- RCA,
- React create app,
- UI,
- user interface,
- Third party,
- Data flow,
- package,
- architecture,
- approach
---

This post is geared towards a reactjs folder structure based on roles, that
aims to favor:

- intent
- communication

Both of them are connected in somehow and in this post I am going to address
the issue that is to organize reactjs componentes in a "meaningful" way, given
that the official reactjs documentation does not provide
an official file structure
{% cite reactjs_official_file_structure --file 2021-01-18-towards-reactjs-folder-structure-based-on-intent %}.

Eventough there are attempts for structuring reactjs
{% cite reactjs_architecture_essentials --file 2021-01-18-towards-reactjs-folder-structure-based-on-intent %}
apps none has gotten an official stamp, probably it will not happen, but it is
possible to become a common standard.

## Table of contents

1. [The default](#the-default)
2. [A new approach](#a-new-approach)
  - [Proof of concept](#poc)
3. [References](#references)

## The default

React create app (RCA) comes with no opinion in how you should structure your
components. As it is a unofficial approach to create a folder named `components`,
and uses it to hold all components needed for the application. A
basic RCA scafolding looks like:

```shell
├── node_modules
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    └── setupTests.js
```

As the scaffolding does not provides any kind of guidance on structuring the
folders by default, I assume that this is on purpose, and the reactjs team
doesn't really care about it. Therefore, it opens a wide range of options, for
use, developers to create such a structure.

Its been a few years since I started to work with reactjs and since then, I
will make a bullet list of the structures that I have used over the last few
years:

```shell
├── LICENSE
├── node_modules
├── package.json
├── package-lock.json
├── postcss.config.js
├── public
│   ├── assets
│   ├── docs
│   ├── favicon.ico
│   ├── index.html
│   ├── lemming.js
│   └── manifest.json
├── README.md
├── src
│   ├── actions
│   ├── components
│   ├── constants
│   ├── css
│   ├── emitter
│   ├── engine
│   ├── index.spec.ts
│   ├── index.tsx
│   ├── locale
│   ├── pages
│   ├── queue
│   ├── react-app-env.d.ts
│   ├── reducers
│   ├── registerServiceWorker.js
│   ├── scss
│   ├── setupTests.ts
│   ├── store
│   ├── tailwind.js
│   └── __test__
└── tsconfig.json
```

From that structure, the only thing that is easy to follow is the lack of organization. At least
for me, it is hard to tell, which part has what and where I can find a specific
piece of code that I am interested in. This is the first issue mentioned earlier
in the post, the `intent` issue. As such there is no clear intent of what the
things are.

The common pattern during the development was to drop any file into a subfolder
of `src`, leading to a structure that does not express any meaning for
the project itself.

## Related work

There are attempts to structure reactjs applications in a opionated way and
without a consensus. For that reason, developers publish materias such as this
one aimed to create a standard.

For example, {% cite akash_joshi --file 2021-01-18-towards-reactjs-folder-structure-based-on-intent %}
states in the blog post a better way to structure reactjs projects following
a principle of responsabilities and adapters. Therefore, it is shallow in
the content of the intent. It assumes that the project uses context,
which might vary from project to project. 

Even the official website from reactjs offers a file structure to
be a pattern across reactjs applications
{% cite reactjs_official_file_structure --file 2021-01-18-towards-reactjs-folder-structure-based-on-intent %},
therefore, it gives a few common approaches such as grouping by features and
grouping by file type.

## A new approach

As a developer, for me `intent` and `communication` is a key player for developing
applications. The goal is to understand as fast as possible the `intent` and
keep progressing in the development cycle. For that, I found a folder structure
that makes me comfortable to work with. The structure is based on `intent` and
`communication`.

The structure has three main pillars, named:

- UI (user interface)
- Third party
- Data flow
- Packages

The division between those two approaches are inspired by different architectural
styles such as hexagonal architecture {% cite hexagonal_architecutre --file 2021-01-18-towards-reactjs-folder-structure-based-on-intent %} and clean architecture {% cite clean_architecture_book --file 2021-01-18-towards-reactjs-folder-structure-based-on-intent %}.

Starting from the UI, this is the place to have visual components. I call visual
components, pure components without complex logic. For example, a container
component can be a visual component as well.

Third party is the place to wrapthrid party libraries that the application depends
on, usually the third party is a dependency that is used across files and in
different places. Moment is an example of third party library that falls on this
category.

Data flow, is the place to have everything related to the data that the UI depends
on. As such, this is the place for redux, mobx or any other library that
handles data flow and has data itself.

The gotcha for this structure I believe for any complex application, lies in
the gray area, between components, and how they communicate. To address this issue
I suggest to use a specific place, a specific folder, named `packages`.

The `packages` folder, in general would have a strict business rule, as such,
it is the place to have, in this case, pure javascript/typescript code.

### POC

The structure presented in the previouse section was applied to the same
project presented in the section [The default](#the-default).

```
├── src
│   ├── components
│   │   ├── app
│   │   └── ui
│   ├── config.ts
│   ├── css
│   │   ├── index.css
│   │   └── tailwind.css
│   ├── data-flow
│   │   └── redux
│   ├── index.spec.ts
│   ├── index.tsx
│   ├── packages
│   │   ├── emitter
│   │   ├── engine
│   │   ├── queue
│   │   └── types
│   ├── pages
│   │   ├── completed-end
│   │   ├── completed-intro
│   │   ├── introduction
│   │   ├── login
│   │   ├── notfound
│   │   ├── rocket-01
│   │   ├── rocket-02
│   │   ├── rocket-03
│   │   ├── survey
│   │   ├── tdd
│   │   ├── tdd-intro
│   │   ├── tutorial
│   │   ├── tutorial-end
│   │   ├── unit-testing
│   │   ├── unit-testing-end
│   │   └── unit-testing-intro
│   ├── react-app-env.d.ts
│   ├── registerServiceWorker.js
│   ├── scss
│   │   ├── attention.scss
│   │   ├── fade-in-left.scss
│   │   ├── fade-out-left.scss
│   │   ├── levelup-animation.scss
│   │   ├── logo-animation.scss
│   │   ├── shake-horizontal.scss
│   │   └── tailwind.src.scss
│   ├── setupTests.ts
│   ├── tailwind.js
│   ├── __test__
│   │   ├── stubs
│   │   ├── withintlProvider.js
│   │   └── withReduxProvider.js
│   └── third-party
├── static.json
├── stryker.conf.js
├── styleguide.config.js
└── tsconfig.json
```

## Future work

The proposed architecture for reactjs applications require adoption to test
if the approach brings any benefit or degrades any aspect of the software
lyfice cicle development. Besides that, the suggested approach can be applied
for different frameworks or libraries, it isnot coupled to reactjs. As such,
further analysis is required to investigate the fit for other popular frameworks.

## References

{% bibliography --cited_in_order --file 2021-01-18-towards-reactjs-folder-structure-based-on-intent %}
