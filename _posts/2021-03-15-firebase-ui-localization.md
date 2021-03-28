---
layout: post
title: Firebase UI localization
date: 2021-03-15 01:06:05.000000000 -03:00
image: /images/posts/2021-03-15-firebase-ui-localization/cover.jpg
type: article
published: true
status: published
categories:
- development
tags:
- firebase,
- Firebase,
- firebaseui,
- reactjs,
- i18n,
- localization,
- build,
- npm,
- language,
- run,
- css,
- web,
- install,
- files,
- process,
- esm,
- anonymous,
- project
redirect_from:
  - /development/firebase-ui-localization
---

Firebase ui has helped me to build an application with social login
with almost no code to write, the ui library provides an implementation
of firebase authentication for web ready to use. As such, the expectation
of easy to use also points to an localization easy to integrate.

Therefore, the i18n for the firebaseui {% cite firebaseui_github --file 2021-03-15-firebase-ui-localization %} has some tricks and is not as
straight forward as it could be, it requires manual building for
each specific language, and also it is required to ship the generated
bundle with the application. In this post, I am going to explore my experience
with the firebase library trying to implement the localization in the
Testable{% cite testable_github --file 2021-03-15-firebase-ui-localization %} project.

**NOTE**: This post does not cover using the firebase CDN (Content Delivery Network)
{% cite cdn --file 2021-03-15-firebase-ui-localization %}
for translations.{% cite firebaseui_github_localized_cdn --file 2021-03-15-firebase-ui-localization %}

## Requirements

1. This post assumes basic knowledge of firebase on the client side (web project) and also in ReactJs.
2. Nodejs 14+ and npm 7+ installed
3. Java installed (openjdk 8+)

## Setting up Firebase UI

The first step is to get the firebase ui up and running locally, the following
commands are available in the README of the project as well.

```shell
git clone https://github.com/firebase/firebaseui-web.git &&
cd firebaseui-web &&
npm install
```

**Note**: The build process is triggered right after the npm install the modules.

Besides node and npm the build process require more dependencies, for example,
the JRE is needed, if you don't have java available, the following error
will show up:

```
[17:35:31] Finished 'build-ts' after 5.56 ms
[17:35:31] Starting 'build-js'...
[17:35:31] Starting 'build-js-en'...
[17:35:31] Starting 'build-firebaseui-js-en'...
[17:35:31] Starting 'build-externs'...
[17:35:31] Starting 'build-ts'...
[17:35:31] Starting 'build-soy'...
Note: Closure Builder will run with an limited feature set!


[Closure Templates Error] Java (JRE) is needed!


[17:35:31] The following tasks did not complete: default, build-js, build-js-en, <parallel>, build-firebaseui-js-en, <parallel>, build-externs, build-ts, build-soy
[17:35:31] Did you forget to signal async completion?
```

To fix install the open JDK as follows:

```shell
sudo apt-get install -y openjdk-8-jre-headless
```

The build process for firebaseui also requires google chrome installed
and available in the path as `google-chrome`. As such, if you don't have it
install the browser first. Otherise if you try to run `npm run build` you will
see the following error:

```
[17:42:52] I/launcher - Running 1 instances of WebDriver
[17:42:52] I/direct - Using ChromeDriver directly...                          
[17:42:52] E/launcher - unknown error: cannot find Chrome binary
  (Driver info: chromedriver=89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}),platform=Linux 4.15.0-112-generic x86_64)
[17:42:52] E/launcher - WebDriverError: unknown error: cannot find Chrome binary
  (Driver info: chromedriver=89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}),platform=Linux 4.15.0-112-generic x86_64)
```

Once google chrome has been installed {% cite installing_google_chrome --file 2021-03-15-firebase-ui-localization %} and available in the path, the build
command should run successfully, before build the assets for any specific
language, try to build the project as it is, with the following command:

```shell
npm run build
```

The output for that command should be something like:

```
[100%] soy_files [Done] (0.6 sec)
[17:47:26] Finished 'build-soy' after 599 ms
[17:47:26] Starting '<anonymous>'...
[17:47:42] Finished '<anonymous>' after 16 s
[17:47:42] Finished 'build-firebaseui-js-en' after 17 s
[17:47:42] Starting '<anonymous>'...
[17:47:45] Finished '<anonymous>' after 3.01 s
[17:47:45] Finished 'build-esm-en' after 20 s
[17:47:45] Starting '<anonymous>'...
[17:47:45] Finished '<anonymous>' after 2.45 ms
[17:47:45] Finished 'build-esm' after 20 s
[17:47:45] Starting 'build-css'...
[17:47:45] Finished 'build-css' after 245 ms
[17:47:45] Starting 'build-css-rtl'...
[17:47:46] Finished 'build-css-rtl' after 201 ms
[17:47:46] Starting 'clean'...
[17:47:46] Finished 'clean' after 5.51 ms
```

The firebase ui, builds all assets for each specific language and 
stores it under specific files, the output of the process is store under the
`dist/` directory, listing the files , should give the following output:

```
dist/
├── esm__en.js
├── esm.js
├── externs
│   └── firebaseui-externs.js
├── firebaseui.css
├── firebaseui__en.js
├── firebaseui.js
├── firebaseui-rtl.css
├── index.d.ts
├── npm__en.js                            <---- English
└── npm.js

1 directory, 10 files
```

By default, the only language that is built is english, for the purpose
of this post, the file that is important to note here is `npm__en.js`, it
has the firebase bundle in English, the build process for other languages
is the sabe as running `npm run build` and specifying the desired language.

To build firebaseui with Spanish support, the followig build command should
be run:

```shell
npm run build build-npm-es
```

The build process for Spanish, will output a new file under the `dist/`
called `npm__es.js`, it means that we have support for English and Spanish.

```
dist/
├── esm__en.js
├── esm.js
├── externs
│   └── firebaseui-externs.js
├── firebaseui.css
├── firebaseui__en.js
├── firebaseui.js
├── firebaseui-rtl.css
├── index.d.ts
├── npm__en.js                            <----- English
├── npm__es.js                            <----- Spanish
└── npm.js
```

## Import localized firebaseui

Having the files translated is half way done, the other piece is to
import the translated files in the frontend project. Before using,
the localized approach, let's dive into the standard way of using firebaseui
in a reactjs application.

The usage is as any other library, just importing it and then later on
in the code invoking its functions:

```javascript
import * as firebaseui from 'firebaseui'

// at some point in the code
const ui = new firebaseui.auth.AuthUI(firebase.auth())
```

The import approach takes english as the standard language, and for a
localized approach with firebaseui, the import should be based
on the language, for example:

```javascript
const firebaseResolver = language => require('../../third-party/wrappers/firebaseui/npm__' + language);

// at some point in the code

const firebaseui = firebaseResolver('es') // imports firebase in Spanish
const ui = new firebaseui.auth.AuthUI(firebase.auth())
```

The localized firebaseui approach has some drawbacks, and the first one is
that it will increse the application bundle size as for each language,
the `npm__*` file created has around 200kbs.

The second is that it requires a page reload, so then it reflects
the selected language as it should:

[![Reloading the page with localized firebaseui](/images/posts/2021-03-15-firebase-ui-localization/localized-firebaseui.gif)](/images/posts/2021-03-15-firebase-ui-localization/localized-firebaseui.gif){:target="_blank"}

## References

{% bibliography --cited_in_order --file 2021-03-15-firebase-ui-localization %}