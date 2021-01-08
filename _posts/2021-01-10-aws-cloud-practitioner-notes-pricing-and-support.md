---
layout: post
title: AWS cloud practitioner notes - Pricing and support
date: 2021-01-10 01:06:05.000000000 -03:00
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


## Module 8 - Free Tier

Types of free tiers:

- Always free
- 12 months free
- Trials

### Special services 

- The AWS lambda service allows for 1 milion free invocations per month
- Amazon S3 is free for 12 months for up to 5GB of standard storage
- AWS Lightsail offers 1 month trial of up to 750 hours of usage
- DynamoDB offers 25GB of free storage per month

## Module 8 - Pricing concepts

- Pay for waht you use
- Pay less when you reserve
- Payless with volume-based discount when you use more

## Module 8 - Billing dashboard

The billing dashboard has the following information:

- Monthly-to-Date Spend by service
- Total month-to-date spend aggregated and forecast
- Top 5 Free Tier Services by Usage
- Access to cost explorer budget and bill

The bill is splited by services, and then regions

## Module 8 - Consolidated billing

Companies are likely to have more than one AWS account, and as such,
it is possible to manage them in a single place (AWS organizations).
AWS organizations has the feature consolidated billing, at the end of the month,
instead of paying the bill for each AWS account, you can generate a single one
for the owner of the organization.

- If you have saving cost plan it can be shared across AWS accounts in the
organization

## Module 8 - AWS budgets

AWS budgets allows you to set budgest for cost and usage, in addition, you
can configure alerts based on thresholds for those budgets.

## Module 8 - AWS Cost Explorer

Allows you to visualize see and analyze how you are spending your money on AWS.

## Module 8 - AWS support plans

By default every customer at aws gets the **basic support**, no additional cost. The
**basic support** offers:

- 24/7 customer service
- Documentation
- Whitepapers
- Support forums
- AWS Trusted Advisor
- AWS Personal Health Dashboard

Therefore, AWS offer the Developer support as well:

- It covers everything in the **basic support**
- Email access to customer support

Business support:

- It covers everything in the **basic support** and **developer support**
- AWS Trusted  Advisor provides full set of best practices checks
- Direct phone access to cloud support engineers
- Infrastructure event management

Enterprise support:

- It covers everything in the **basic support**, **developer support** and
**business support**
- 15 minute SLA for business critical workloads
- Dedicated technical account manager (TAM)


TAM's work together with customers to offer architecture reviews based on
the well architected framework, that is based on five pillars:

- Operational Excellence
- Security
- Reliability
- Performance Efficiency
- Cost Optimization

## Module 8 - AWS marketplace

AWS marketplace is a catalog that has thousands of software from independent
software vendors (Enterprise focused features).

- Custom terms and pricing
- A private marketplace
- Integration into your procurement systems
- Cost management tools

### Categories

|Business applications|data & analytics|dev ops|infrastructure software|
|IoT|Machine Learning| Migration|Security|

## References

{% bibliography --cited_in_order --file 2021-01-10-aws-cloud-practitioner-notes-pricing-and-support %}