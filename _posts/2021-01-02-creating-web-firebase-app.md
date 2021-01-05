---
layout: post
title: Creating web firebase app
date: 2021-01-02 01:06:05.000000000 -03:00
image:
type: article
published: true
status: published
categories:
- development
tags:
- project,
- app,
- step,
- analytics,
- javascript,
- create,
- firebase,
- database,
- web,
- post,
- real,
- console,
- account
---

Firebase is a service that started as a real time database and expanded
the services as it grew. The real time database provides a integration
for sharing data in real time with no need to set up an infrastructure.
This post aims to cover the web app creating in order to generate the javascript object needed to configure the javascript SDK.

Be aware that the javascript SDK used in this post is not the Nodejs, rather, the focus is in the client side only.

## Requirements

1. A google account
2. Javascript basic experience

## Creating the web app

The first step to create the web app is to go to the [firebase console](https://console.firebase.google.com){:target="_blank"}, and hit the plus button.

The project requires two steps to be filled in order to be created: project name
and analytics. Therefore, if analytics is selected, there will be a third step
to configure the analytics settings.

[![add new project - firebase console](/images/posts/2021-01-02-creating-web-firebase-app/new-project.png "add new project - firebase console")](/images/posts/2021-01-02-creating-web-firebase-app/new-project.png){:target="_blank"}

Next up, choose a project name. It will be used to generate the project unique
name and related information.

[![set a project name - firebase console](/images/posts/2021-01-02-creating-web-firebase-app/project-name.png "set a project name - firebase console")](/images/posts/2021-01-02-creating-web-firebase-app/project-name.png){:target="_blank"}

The next step is optional, but it comes enable by default. The analytics
part of the project is used to track usage and different stats.

[![set the project analytics - firebase console](/images/posts/2021-01-02-creating-web-firebase-app/project-analytics.png "set the project analytics - firebase console")](/images/posts/2021-01-02-creating-web-firebase-app/project-analytics.png){:target="_blank"}

Select an analytics account if one you might want already exists or create a new
one directly in the dropdown clickin on "Create a new account". The last step
is to hit "Create project", and it will take a few seconds to finish.

[![project completed - firebase console](/images/posts/2021-01-02-creating-web-firebase-app/project-completed.png "project completed - firebase console")](/images/posts/2021-01-02-creating-web-firebase-app/project-completed.png){:target="_blank"}

Once it is done, "Continue" button redirects to the created project dashboard page.

[![project dashboard - firebase console](/images/posts/2021-01-02-creating-web-firebase-app/project-dashboard.png "project dashboard - firebase console")](/images/posts/2021-01-02-creating-web-firebase-app/project-dashboard.png){:target="_blank"}

Finally the next step is to choose the web platform to create the credentials for
the project.

[![project web setup - firebase console](/images/posts/2021-01-02-creating-web-firebase-app/project-web-setup.png "project web setup - firebase console")](/images/posts/2021-01-02-creating-web-firebase-app/project-web-setup.png){:target="_blank"}

The web app also needs a name. This step is required as a single firebase project
can have multiple applications. This post is focused on web app, but it is possible
to create an android project or unity as well, each with its own name.

[![project web set name - firebase console](/images/posts/2021-01-02-creating-web-firebase-app/project-web-app-name.png "project web set name - firebase console")](/images/posts/2021-01-02-creating-web-firebase-app/project-web-app-name.png){:target="_blank"}

The checkbox hosting is optional and by default it comes unchecked. For
this post I left as it is and hit the "Register" button.

[![project web completed - firebase console](/images/posts/2021-01-02-creating-web-firebase-app/project-web--app-completed.png "project web completed - firebase console")](/images/posts/2021-01-02-creating-web-firebase-app/project-web--app-completed.png){:target="_blank"}

Finally we have our credentials. The javascript object can be used in any client
application. Hitting "Continue to console" redirects to the console dashboard,
but this time it lists the created project as well.