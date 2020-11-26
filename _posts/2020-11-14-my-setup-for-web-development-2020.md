---
layout: post
title: My setup for web development, 2020 edition
date: 2020-11-14 01:06:05.000000000 -03:00
image:
type: article
published: true
status: published
categories:
- development
tags:
- tmux,
- docker,
- setup,
- development,
- zsh,
- version,
- vscode,
- IDE,
- system,
- text,
- vim,
- configuration
---

Usually I like to jump from one setup to another just for fun of learning
some new tricks, I have worked on windows, linux and macos. Currently, my
setup is linux, though, previously I used a macos. The latest version
that I got in touch was macos Catalina.

This post aims to cover my currently setup that I have been using in 2020 and
provide details on configuration and why the decision to chose a given tool.

Disclaimer: this is my personal setup, I am not endorsing any particular
tool over another.

The content distributed as follows:

1. [Operating system](#operating-system)
2. [Development environment](#development-environment)
3. [IDE'S and text editors](#ides-and-text-editors)

## Operating system

There are two major distros that I have been using, [Elementary OS](https://elementary.io){:target="_blank"} for work and
my personal laptop has [Manjaro (Gnome version)](https://manjaro.org){:target="_blank"}. The Manjaro specs are as follows:

```
OS Name              Manjaro Linux; Build ID: rolling
OS                   Type64-bit
Gnome version        3.38.1
Windowing system     X11
```

## Development environment

My development environment changes based on the type of application that
I am working on, but for this section, I am describing the tools that I use
for the overall development cycle, which means that I will use those
regardless of the app I am building.

### Zsh

Personally I use the zsh shell instead of the default one that comes with linux distros.
Besides that I also use the plugin [oh my zsh](https://github.com/ohmyzsh/ohmyzsh){:target="_blank"}
that provides extra functionality to the zsh shell. It has been a companion of mine
for many years, despite of its ease of installation it helps me to keep a
acceptable productive level, avoiding repetitive key strokes and auto completing
my terminal commands.

The plugins that I have enabled on my configuration are:

- [git](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git){:target="_blank"}
- [dotenv](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/dotenv){:target="_blank"}
- [docker](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/docker){:target="_blank"}
- [docker-compose](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/docker-compose){:target="_blank"}
- [zsh-autosuggestios](https://github.com/zsh-users/zsh-autosuggestions){:target="_blank"}

Besides that I personally have a few aliases that I configured to help me to
avoiding typing repetitive commands, the follow list depicts the custom aliases:

```shell
alias hh="cd ~/Projects"
```

As a theme for zsh I use [powerlevel10k](https://github.com/romkatv/powerlevel10k){:target="_blank"}
which provides a easy to setup, custom terminal look.

### Tmux

For a more productive terminal I stopped using the terminal tabs in favor of
[tmux](https://github.com/tmux/tmux){:target="_blank"} windows/panes. The tmux approach allows me to create, delete, split, resize
panes with a few key binding and the most important, without leaving the keyboard.

As a companion to tmux I use a plugin called [.tmux](https://github.com/gpakosz/.tmux){:target="_blank"} that self describes it as a "oh my tmux",
which I think is influenced by the "oh my zsh" and also provides extra functionality
to tmux, without the need of trcking the tmux config yourself.

### Docker

I got started in the virtualization via virtual box and specifically for development
with Laravel homestead, then, I decided to move to docker as it setup require
less steps compared to the virtualization approach.

Besides docker, I often use docker compose to compose my services. Currently
the versions that I am using are:

```
Docker version 19.03.13-ce, build 4484c46d9d

docker-compose version 1.26.2, build eefe0d31
```

Docker became the standard for for any dependency that the apps I am building
depend on, for example, if I need redis, I will use docker for setting up
the service, the same applies for databases, those are the docker images that I
use often in my flow:

- mysql
- redis
- nodejs
- python
- php
- rabbitmq

Instead of have those dependencies installed locally, I setup them using docker
instead. For example, the most common workflow with nodejs is to use nvm and
switch between node version locally:

```
nvm install 12
```

Once the version is installed, the nodejs is available in the path, such as:

```
node --version
```

My approach is to use docker first, instead of nvm:

```
docker run --rm node:12 -v $(pwd):/app -w /app node --version
```

The gotcha is to use the flag `w` (workspace) and `v`(volume). Those flags
translate into something like: I have an app in this directory and I want
to map them to the container, and also I want to use `/app` as the default
directory to execute the commands inside the container.

## IDE's and text editors

I have used a bunch of IDE's and text editors, professionally and also as a hobby
just to get the gist of it. I remember using, netbeans for php, eclipse for java,
and sometimes notepad++ as well for simple HTML editting.

During the years I became more familiar with: vim, vscode and PHPStorm. Those
are the ones I use most often.

### Vim

Vim has been one of the text editor that I use the most due its key bindings. I
previously discussed about vim and how was the process of adopting it as a full
time text editor {% cite vim_30_days --file 2020-11-14-my-setup-for-web-development-2020 %}
{% cite 30_days_of_vim_one_week_after --file 2020-11-14-my-setup-for-web-development-2020 %}.

I still use vim but in another flavor, neovim. Besides that used to setup
my vim configuration using vim bootstrap, but since I discovered SpaceVim, I switched
to it.

I often use this setup to edit configuration files related to the operating system.
For development, I use vscode.

### Vscode

Vscode is the text editor that I spend most time in, as it has support for
javascript/typescript out of the box. I do not use vscode as it comes, I have
a list of plugins that I work with to make it as productive as possible
for my use case. The extension list is as follows:

- eslint
- vim
- file utils
- formate: CSS/LESS/CSS
- gitlens
- jest runner
- macrosRe
- settings Sync
- tailwind CSS Intellisense
- wakatime

Theme used:

- [Onde dark pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme){:target="_blank"}

Font:

- [JetBrainsMono](https://www.jetbrains.com/lp/mono){:target="_blank"}

The vim extension is the one I use the most, as it brings the vim key bindings to
vscode. In a normal workflow I often use a mix of vim and vscode bindings.

### Phpstorm

PHPstorm is my preferred IDE to edit PHP files or to do refactoring. I tried
to keep all my use cases in PHP on vscode code but the intelisense and experience
that PHPStorm has for PHP is better.

### DBeaver

DBeaver is been the DBMS that I have used the most for MySQL and postgres.
Previously I used MySQL workbench for MySQL, but since I started to require
more than one type of database, DBeaver suited better my needs.

### Robo 3T

For mongodb the GUI that helped my since I started is Robo 3T, which provides
a simple interface and with the features I need to go through collections,
connect to different servers and query data.

## References

{% bibliography --cited_in_order --file 2020-11-14-my-setup-for-web-development-2020 %}