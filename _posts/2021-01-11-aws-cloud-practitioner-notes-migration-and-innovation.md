---
layout: post
title: AWS cloud practitioner notes - Migration and innovation
date: 2021-01-11 01:06:05.000000000 -03:00
image: 
type: article
published: true
status: published
categories:
- aws
- ccp
tags:
- aws,
- AWS,
- S3
---

## Introduction

Migrating into the clud is a process, and it takes a lot of work to get things
migrated into aws.

## Module 9 - AWS Cloud Adoption Framework (AWS CAF)

AWS Cloud Adoption Framework (AWS CAF) provides advise companies in 6 areas,
focused on the people type that you will need for the migration

- Business
- People
- Governance
- Platform
- Security
- Operations

AWS CAF Action Plan keeps your organizaion on track during the migration process.

## Module 9 - Migration strategies

The 6R's:

1. Rehosting (lift-and-shift) - moving applications without changes
2. Replatforming (lift, tinker, and shift) - involves making a few cloud optimizations to see benefits
3. Retire - removing applications that are no longer needed
4. Retain - keeps applications that are critical for the business in the source environment
5. Repurchashing - fresh start, moving from tradicional license to a software-as-a-service model, from a old product to a new one
6. Refactoring - Driven by strong business need to add features, it involves changes in the code of current applications to support cloud solutions

## Module 9 - AWS Snow Family

A collection of physical devices that help to physically transport up to
exabytes of data into and out of AWS.

### AWS Snowcone

AWS Snowcone is a small, rugged, and secure edge computing and data transfer device. It features 2 CPUs, 4 GB of memory, and 8 TB of usable storage.

#### AWS Snowball edge store optimze

It's well suited for large-scale data migrations

#### AWS Snowball dge compute optimze

Provides powerful computing resources for use cases such as machine learning, full motion video analysis, analytics, and local computing stacks.

### AWS Snowmobile

Capacity up to 100PB.

## Module 9 - Innovation with AWS

AWS supports VMWare Cloud on AWS as lift-and-shift.

### Amazaon SageMaker

Quickly build, train and deploy machine learning model at scale, and it is
supported by the most popular open source frameworks.

### Amazaon  A2I

Machine platform that anyone can operate without an expertise

### Amazon Lex 

Helps you build interactice chatbots

### Amazon Textract

Helps you to extract text from documents

### AWS DeepRacer

Machine leraning service for reinforcement learning


## References

{% bibliography --cited_in_order --file 2021-01-11-aws-cloud-practitioner-notes-migration-and-innovation %}