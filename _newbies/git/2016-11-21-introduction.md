---
layout: post
title: Git introduction
date: 2016-11-21 23:39:18.000000000 -02:00
type: post
published: true
status: publish
categories:
- Newbies
tags:
- git
- web
redirect_from:
  - /git/introduction
---

Key words: Distributed, Main server, compile, elegant fail prevention

## What is git, why should i use it?

In the early days of software development, programmers used to write code and
push it to a main server. This worked really great in 90s and, believe it or not,
it still does nowadays, but of course there are more elegant solutions to today's
software development.

Linus Torvalds, the Linux creator, had a big issue when he was trying to develop
other systems and keep them versioned, from this point on he decided that he
would just end the software when he had a good versioning system, then git was
born.

Back in the days SVN was the main version system used by programmers and it was
like a main server where you could push all your code to it.

<img src="images/svn.png"/>
<small>https://bhrugeshblog.wordpress.com/tag/subversion/</small>

The image above shows it very clear to us: it is a main server where every
client has the entire code. It basically is a copy and paste in each client
machine. The arrows in the right side are the operations that developers do in
a common repository. Updates mean that in each client machine it will get only
the fresh new version from the main server, and the commits are what each
client does before push code to the server.

The big problem with SVN(Subversion) is that it doesn´t work in a distributed
way, you can only have a main repository where it needs to be online, SVN is
even more complex because each commit is an entire “photograph” of the entire
repository. This means that even if you change one single line in your code base,
SVN will “take a photograph” of your entire repository and it makes it really
hard to sync.

Git is a distributed system to contribute among programmers. It makes versioning
really easy and the collaboration works better. Git works in a opposite way
comparing with SVN, it does distributed instead of one single point. Which
means that every client can be a main server.

<img src="images/git.png"/>
<smal>https://www.javacodegeeks.com/2014/05/using-git.html</smal>

Git also takes care to not create a new copy of all files when a change occurs
to  a single file, it's smart enough to send to the server only what has been
changed instead.

## Git features

In this section we are going to examine essential git features and how to
properly use them. If you are new to git you must read this section, if you
are not I´d recommend reading just to revise. Git has different features
ranging from the most basic ones such as commit, clone, push, pull to the
more advanced ones, cherry-pick, rebase and bisect. You don't need to memorize
each of those commands but rather understand what is the purpose of each one and
what problem it tries to solve.

First, Understanding the repository is the key to proceed
"Repository : a place, building, or receptacle where things are or may be
stored."
<small>http://www.merriam-webster.com/dictionary/repository</small>

On the one hand,the dictionary says that a repository is a place where we can
store something, on the other hand,to us in the computer scope it is an abstraction.
Indeed, a repository is where we store things but in git it means the source code
(you can store any kind of data with git, but for simplicity let's assume only
source code), the repository is where the source code stays and is pushed to.

One of the chapters of Peter Goodliffe’s book is dedicated to
Version Control Systems, and he uses git as an example - but it could be any
other, i.e. Mercurial or SVN. He says that every programmer should master its
skills with version control and also tells us a little story that he had been through
with a team that didn't use a version control system.

The team usually sends the code to an email in the end of week after a long
week of coding, he calls it "Distributed Data Loss".

If you think it is something absurd to send source code through an email,
what vantages do we get using a Version Control System? Peter has answered it
in the following items from his book:

- It provides a central backup of your work.
- It provides the developer with a safety net. It leaves room to experiment, to try changes, and roll them back if they do not work.
- It fosters a rhythm and cadence of work: you do a chunk of work, test it, and then check it in. Then you move on to the next chunk of work. For example, a single git init command in a directory establishes a Git repository in a heartbeat.
- It enables multiple concurrent streams of development to occur on the same codebase without interference.
- It enables reversibility: any change in the history of the project can be identified and reversed if it is found to be wrong.

<small>Become a better programmer - Peter Goodliffe, Page 171</small>

Before jumping into the next section, give a try on [this](https://learngitbranching.js.org/?locale=en_US){:target="_blank"}
resource that uses gamification to teach the basics of git. It is an alternative
for new comers to git as it uses analogies to make the experience of learning
git less frustrating.

## Getting started

From now on you need to have git installed in your operating system. If you do
not have it yet, follow [this](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git){:target="_blank"}
link to install it.

The command line will be your friend as well, all the commands are executed on a
terminal. Github provides an interface to handle it but for learning purposes
it is recommended to use only the terminal.

