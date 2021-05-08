---
layout: post
title: Git release bot - PART 1
date: 2020-07-19 01:06:05.000000000 -03:00
image:
table_of_contents: 2020-07-19-git-release-bot-part-1/table-of-contents.md
type: article
published: true
status: published
categories:
- devops
tags:
- version,
- file,
- gitbot,
- release,
- git,
- commit,
- update,
- developer
---

Releasing software to the final users is challenging regardless of the programming
language of choice. For web apps it requires a web server, for compiled apps
it requires a way for distribute the binary and for each one extra steps
are needed, in the end the release is just the final step of a long process.

In the old days, applications where deployed via SFTP and required to move file by file
in the server, later on git, was used to make the changes a bit easier, without the need
to upload file by file then the devops and continuous integration/delivery
came to support the agile practices.

Gitbot comes to continue the continuous integration/deploy in the development
process based on conventional commits and semantic version. Gitbot is an attempt
to make the boring task to change files (`package.json` or `composer.json`) versions
for each relased an automated process.

## The problem with releases

To release a version of a software, usually there is a boring task of updating
specific files with the version to be released. For example, a team may want to update
the `package.json` file (version property) with the release they are tagging,
for documentation purpose. Then, before a release the developer in charge of the
release must remember to follow the rules of updating the file, and after that
generate a git tag.

In the scenario described the major issue is to relay on the developer
to always remember to update the file, which is fine, but what if the release
requires to update two, or even three files? There is the human aspect of it
as well, we are humans and we are error prone, which we can sometimes,
forget to do things. In this case, the developer can also forget to update the
files before the release, and then if it happens, the developer should
follow a specific flow to change the file (or files) and release again.

## Gitbot concept

The gitbot project is based in two major conventions:

* Conventional commits {% cite convetional_commits --file 2020-07-19-git-release-bot-part-1 %}
* Semantic version {% cite semantic_version --file 2020-07-19-git-release-bot-part-1 %}

In practice gitbot integrates with a git repository and watches through webhook for pushes into
a specific branch (or branches) which can be configured through the web interface.
Once a push is made gitbot receives the commit (or commits) content, and then
analyze the commit title for one specific match:

```shell
chore: tagged version x.x.x
```

As a first approach the version pattern is constrained to use numeric versions,
only, (this is a limitation added just for speed up the prof of concept),
for example, the following version is valid:

```shell
chore: tagged version 10.2.0
```

Therefore, the following version is not:

```shell
chore: tagged version 10.2.0-rc
```

Once Gitbot detects the match, it will automatically push the changes to the
files with the specific version. The following flow chart describes the flow that is executed starting from the git repository (Gitlab).

[![Git bot flow chart](/images/posts/2020-07-19-git-release-bot-part-1/flowchart.png)](/images/posts/2020-07-19-git-release-bot-part-1/flowchart.png){:target="_blank"}

Currently Gitbot implementation
{% cite gitbot_github --file 2020-07-19-git-release-bot-part-1 %}
supports Gitlab only, but it's core was designed to support other git providers,
such as github or bitbucket.

## References

{% bibliography --cited_in_order --file 2020-07-19-git-release-bot-part-1 %}

## Appendix

This [link]({% post_url 2020-12-20-deploying-git-bot-release-to-aws-lambda %}){:target="_blank"} provides
a step-by-step guide to deploy gitbot release in AWS lambda.