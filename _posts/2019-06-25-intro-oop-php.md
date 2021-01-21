---
layout: post
title: Introduction to OOP with PHP (Classes, Encapsulation, Inheritance)
date: 2019-06-25 02:06:05.000000000 -03:00
image: /images/posts/2019-06-25-intro-oop-php/cover.jpg
type: article
published: true
status: published
categories:
- php
tags:
- class,
- programming,
- private,
- classes,
- Person,
- object,
- type,
- final,
- methods,
- code,
- inheritance,
- web,
- oop,
- php,
- PHP,
- behaviors,
- oop,
- php oop examples,
- encapsulation php,
- encapsulation in php,
- types of inheritance in php,
- php final class
---

The following content aims to introduce the concepts of OOP, complementing these
concepts the PHP language is used to demonstrate practical examples, but can be
written in any programming language.

## Introduction

Object-oriented programming is a paradigm used in programming to approximate
reality. In comparison to structured programming where each line of code
executes a statement, object-oriented programming is distinguished by
representing code in classes.

- Classes: represents a prototype of an object. To create an object it is necessary to define a class beforehand.
- Object is the concrete instance of a class, which has behaviors.

*The UML has a unique diagram for this type of approach, the class diagram. This diagram aims to represent how the interaction between classes is in a system*

One of the advantages of using OOP instead of structured programming is code
reuse, also known as inheritance and polymorphism. On the other hand,
structured programming reuses code through functions and nothing else, which in
some scenarios makes it difficult to use the same logic. Such as a function
that needs to behave in a way based on a parameter. Typically this approach in
structured programming is addressed with a switch / case.

## Classes

A class can be represented by its behavior (methods) and attributes (variables).

``` php
<?php

Class Person
{

   public $name;
   public $age;
   public $id;
}
```

In structured programming, this type of abstraction is done in a different way.
For example in C is used struct to create a new data structure.

Classes in particular have two behaviors, the constructors and the destructors.
Constructors are used to define an initial state of an object, and destructors
are used to define the final behavior, and are executed before an object is
destroyed from memory.

```php
<?php

class Person {
  __construct() {}
  __destruct() {}
}
```

Note: methods that begin with __ in your name have a special meaning in PHP.
These methods are known as magic methods, which have a certain behavior
depending on the type of method invoked.

## Encapsulation

Encapsulation provides a process of allowing / denying access to behavior and
data that a given class has through the visibility modifiers.

*Note: One of the first approaches of PHP (PHP 4) object orientation did not have implemented visibility. All attributes were public and accessible. (https://subscription.packtpub.com/book/web_development/9781847192561/1/ch01lvl1sec09/difference-of-oop-in-php4-and-php5)*

**Note 2: With php 7.4, it is now possible to take properties of a class*

PHP has three types of public, private, and protected visibility modifiers.
Modifiers are used in the attributes and methods of a class and classes that
inherit can modify the behavior of the parent class.

## Inheritance

Inheritance is known is the act of inheriting all behavior from one class to
another, with the possibility of changing some particular desired behavior.
The goal of inheritance is to reuse existing code.

Following with the example of the person class, in an actual application, could
have the difference of type, such as for example physical or legal person.

```php
<?php

class Person
{

   private $name;
   private $age;
   private $id;
}


class LegalPerson extends Person
{

   private $name;
   private $age;
   private $document;
}
```

*Note: In this example we could go a little further and put a Person base class
and create two other PersonPass and LegalPerson classes, so the cpf attribute
would not be unusable in the legal class.*

Polymorphism refers to many forms, in the context of object orientation,
we apply polymorphism so that classes derived from other classes (inheritance)
have the same methods but different behaviors.

This type of approach is used when programming for the parent class and not for
a particular implementation.

```php
<?php

Class Person
{
   private $name;
   private $age;
}


Class LegalPerson extends Person
{
   private $document;
}


Class NaturalPerson extends Person
{
   private $id;
}
```

In a scenario where we want only the document value independent of the type of
person, polymorphism becomes important.

```php
<?php

$naturalPerson = new NaturalPerson('john', 20, 3232323);
$legalPerson = new LegalPerson('maria' 1, 50, 999999);

$persons = [
  $naturalPerson,
  $legalPerson
];
```

This scenario illustrates the concept of abstraction and polymorphism, the final
program, is concerned with the behaviors that exist in a person and not in
specific behaviors of legal person or individual.

## abstract classes

Abstract classes are used for this purpose, to create an abstraction based on
some behavior. In one sense of class hierarchy, the abstract class is used as
the basis for all others.

*Note: At this point it is necessary to think exclusively about the hierarchy and
how to use it, good programming practices, like testing, favor composition
rather than inheritance.*

```php
<?php

abstract class Person {}
```

With abstract class it is not possible to instantiate an object, since the
concrete class is allowed.

## final classes

On the other hand, sometimes it is possible that a scenario of blocking any type
of inheritance is imposed. For this the final classes were there, declaring a 
class as final, it is not possible to extend it.

```php
<?php

final class LegalPerson {}
```

## References

{% bibliography --cited_in_order --file 2019-06-25-intro-oop-php %}
