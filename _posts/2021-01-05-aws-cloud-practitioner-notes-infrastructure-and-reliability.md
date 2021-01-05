---
layout: post
title: AWS cloud practitioner notes - Infrastructure and reliability
date: 2021-01-05 01:06:05.000000000 -03:00
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
- global infrastructure,
- availability zone,
- AZ,
- edge locations
---

## Introduction

AWS provides solutions to provide high availability for customers through multiple regions. 

## Module 3 - global infrastructure

AWS provides a range of regions to support highly availability.

1. Compliance (does the data has restrictions to any country? Usually complice states restrictions to where the software should operate.)
2. Proximity (Close to the customer, usually the right call as the content will be provided faster compared to farther regions)
3. Future availability 
4. Pricing (some locations are more expensive to operate)

Each region is made up of multiple of datacenters. AWS calls a single
datacenter or a group of datacenters a **availability zone** or **AZ**.
AWS datacenters have redundant power, networking and connectivity.

Services that have the check "Regionally scoped service" are already
high available.

## Module 3 - Edge locations

AWS provides a CDN (Amazon cloud front) uses edge locations to accelerate
communications with customers around the world. 

- Regions are geographically isolated areas
- Regions contain **availability zones**
- Edge locations run Amazon CloudFront

Best practive tip: deploy infrastructure accross at least 2
availability zones

AWS outpost installs a mini regions inside a private data center.

## Module 3 - How to provision AWS resources

In AWS everything is an API call, there are pre detemrined ways to
interact with AWS services. There are a few options to interact with
those services, for example:

- AWS management console (web based, visually)
- AWS Command line interface (CLI - API calls via terminal)
- AWS Software Development Kits (SDKs - interface for different programming languages)

### Elastic beanstalk

Elastic beanstalk is a AWS managed service that manages EC2 instances.
You provide a configuration such as networking, storage, scaling and
the application to run. Besides, this is a way of making the process
repetible and prevent the possible human error during repetitive tasks.

### CloudFormation

Cloud formation is a service that AWS provices to provision services
through scripts (code tool). Through XML or JSON declarative scripts
called CloudFormation templates.


```shell
                                    calls to AWS apis
                                     ________________ 
                                    |                |
CloudFormation template  ---------> |  Aws Formation | ---------> AWS services 
                                    |________________|
```

The CloudFormation approach decouples the what yuo want to build from
how to build it. The CloudFormation takes cares of the how, and you the what.