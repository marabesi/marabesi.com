---
layout: page
title: Side projects
date: 2020-12-21 01:06:05.000000000 -03:00
type: page
published: true
status: publish
categories: []
tags:
- php,
- extension,
- release,
- page,
- projects,
- json,
- package,
- github,
- trello,
- laravel
---

# Side projects

This page is a curated list of my personal sides projects that I have built over the years as a developer. They go from a wide range, from
extension to improve developers productivity to simple chrome extensions
to solve boring tasks.

## Git release bot

Gitbot release was built to automate the boring tasks of updating files during a release. Besides creating a new tag in git, the release process
requires updating json (such as package.json and composer.json) files with the tagged version.

- [Git release bot]({% post_url 2020-07-19-git-release-bot-part-1 %})

## Github stats dashboard

[Github stats](https://github.com/marabesi/github-stats-dashboard){:target="_blank"} is a project that renders a github repository activity. The
focus is on simplicity as the project offers three visualizations:

1. Barchart (Number of commits by day, week, month or year)
2. Bubblechart based on the tech stack (programming languages used. The most used the bigger the bubble)
3. World cloud using based on the repository topics

## PHP import checker

PHP import checker is a visual code extension that was inspired by PHPStorm a IDE by jetbrains that has (in my opinion) the best namespace support for PHP. As Vscode is a editor it was lacking the powerful feature of highlighting unused imports in a PHP file, to fix that issue I published the extension on the marketplace.

- [PHP import checker vscode extension]({% post_url 2020-04-05-php-import-checker-vscode-extension %})

## Trello to excel

Trello to excel is a chrome extension that exports a trello board to a exel file following a specific spreadsheet layout.

## Laration

Laration is a PHP/Laravel package that provides a CLI to show up in a nice way the env variables currently being used by any Laravel application.

- [Laration]({% post_url 2016-11-26-laration %})

## Laravel easy crud

Easy CRUD was created to easily generate a CRUD for each Eloquent model (Laravel's ORM). The package generates a admin like interface to create, read, update or delete data from the database.

## zcpe

ZCPE is a project that was created to follow my studies on the PHP
language and later on in the ZCPE exam. The github repository has the
ten topics covered by the exam as well as a "playground" like to navigate
through the code snippets.

The current content in the project supports the version 5.5 of the ZCPE
exam.

## Doorman

Doorman is a IoT project that uses web technologies and raspberry Pi + MQTT + nodered to open a door configured via GPIO.

## API skeleton

API skeleton is a project that provides a scaffolding for bulding an API using the PHP programming language.

<!-- ## Twitter clone

## Arduino PHP Wrapper

## Firebase Auth Dashboard -->
