---
layout: post
title: PHP import checker - VScode extension to support PHP developers
date: 2020-04-05 01:06:05.000000000 -03:00
image: /images/posts/2020-04-05-php-import-checker-vscode-extension/cover.png
type: article
published: true
status: published
categories:
- php
tags:
- PHP,
- color,
- command,
- highlight,
- developers,
- IDE,
- php,
- import,
- checker,
- visual,
- studio,
- code,
- market,
- place,
- extension
---

Vscode is one of the most used editors for web development
{% cite pypl_ide_index --file 2020-04-05-php-import-checker-vscode-extension %},
which supports various programming languages, including PHP.
As its goal is not to be a full featured PHP IDE, it lacks a few characteristics
that help PHP developers to be more productive. In that list, we can name one:
the lack of checking if an imported class is being used or not.

On the other hand, PHPStorm {% cite phpstorm_jetbrains --file 2020-04-05-php-import-checker-vscode-extension %}
has the ability to check imports being used built-in - This is a long discussion
between editors x IDE's. PHP import checker {% cite php_import_checker --file 2020-04-05-php-import-checker-vscode-extension %} fills
this gap, which offers PHP developers feedback of unused classes that have been
imported into the file. The content is provided in the following order:

## Table of contents

1. [Installing the extension](#installing-the-extension)
2. [PHP import checker features](#php-import-checker-features)
3. [Conclusion](#conclusion)
4. [References](#references)

## Installing the extension

Once installed Vscode, the steps to install PHP import checker are the following:

1. Launch Vscode
2. Access the extension menu
3. Search for PHP import checker
4. Hit the button install

## PHP import checker features

The extension is enabled by default, once installed it will start to look
for unused classes in PHP files only. The first feature that the extension provides
is a command to run the import checker manually.

The extension runs on PHP files only and by default it will run and scan
the imported classes once the file is saved. Though, there are cases in which
the developer might want to run the scan manually, for that a command is
available. The command can be executed typing "check php import" in the
command palette {% cite command_palette_vscode --file 2020-04-05-php-import-checker-vscode-extension %}
(as depicted by the following gi).

![Unused class highlight in red, the default color](https://github.com/marabesi/php-import-checker/blob/master/demo.gif?raw=true){:target="_blank"}

By default, the extension uses a red color to highlight the unused classes in the
file. The color can be changed through the directive `php.import.highlight`. The
directive accepts a JSON with the key `color`. The color should be in the hex
format. The JSON settings can be accessed through the command palette as well
{% cite workspace_settings_vscode --file 2020-04-05-php-import-checker-vscode-extension %}.

```json
{
  "php.import.highlight": {
    "color": "#fff"
  }
}
```

The `color` key inside the directive `php.import.hightligh` was used to provide
a flexible way if needed in the future. This way is possible to add more options
without side effects or need to change previous directives.

![Changing the highlight color from white to yellow](https://github.com/marabesi/php-import-checker/blob/master/demo-color.gif?raw=true){:target="_blank"}

The highlight color can improve the fitness of the extension with different themes
that developers might use, if the theme used by the developer has a red background
it would be harder to note the highlight that the extension adds to the imported
class.

## Conclusion

PHP import checker is an extension that aims to help PHP developers to write better
code, letting the developer know when an unused import is in the file. The extension
is simple and provides a command to run the checker manually and an option for the
developer to change the highlight color.

Besides that the extension is open source and its being developed at Github. There
are edge cases that have been reported and are being tracked on the issues
section of the project.

## References

{% bibliography --cited_in_order --file 2020-04-05-php-import-checker-vscode-extension %}