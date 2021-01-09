---
layout: post
title: AWS cloud practitioner notes - The cloud journey
date: 2021-01-12 01:06:05.000000000 -03:00
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

Is designed to enable architects developers and users of aws to build secure,
performant, resilient and efficient infra structure for their applications.

| Operational excellence | Security | Reliability |
| Performance efficiency|Cost optimization||

## Module 10 - AWS well-architectd framework

The well architected framework is build on five pillars, named:

1. Operational excellence
2. Security
3. Reliability
4. Performance Efficiency
5. Cost Optimization

### Operational excellence

Focused on running and monitoring system to delivery business values, and
continually improve process and procedures.

### Security

Priority number, checking integrity of data, protecting systems using ecnryption.

### Reliability

Recovery planning, such as dynamoDB disruption or EC2 dailures, how you handle failure
to meet business and customer demand.

### Performance Efficiecy

IT and computing resources efficiently, for example, using the correct EC2 type.

### Cost optimization

Controlling where money isspent, checking if the ec2 size if over estimated. If
so, you can change for a better type of instance.

## AWS well-architected tool

Is available as a general tool through AWS console, it presents a plan in how
to optimize your services to suit the well architected framework.


## Module 10 - Benefits of the AWS Clouds

### 6 benefits of using AWS Cloud

#### 1. Trade fixed expense for variable expense 

1. Physical space
2. Hardware
3. Staff for racking and stacking
4. Overhead of running data center
5. Fixed cost

Building with AWS is fundamentaly different, the cost will vary month-to-month
as you consume different services. You cans tart small, pay for only what you use
and as you grow pay on deman.

1. Turn off unuSed instances
2. Delete old resources
3. Optimize your applications
4. Receive recommendations from AWS Trusted Advisor

#### 2. Benefit from massive economies of scale

AWS is building on massive capacity on aroud the world, AWS is an expert on
building data center. Because of that you can achieve a lower price than
running your own data center.

#### 3. Stop guessing capacity

Building a data center you need to estimate for support the growth over time.
Imagine that you estimated a data center for 10m users, but in reality, you just got
500k. Still you have to pay for 10m.

On the other hand, lower capacity than the expected can also lead to difficulties,
trying to support a capacity that is higher than the expected.

All in all, guessing tou capacity upfront can be problematic, if you
over or under estimate.

With AWS, you don't have to guess.

- Provision resources you need for the now
- Scale up or down based on real life
- Scaling can take minutes with AWS, not weeks or months

#### 4. Increase speed and agility

Experiment  and try out new services on AWS is easy. You can:

- Spin up test environments
- Run experiments
- Delete resources
- Stop incurring costs

Usually, traditional data center does not offer this flexibility.

#### 5. Stop spending money running and maintaining data center

If you aren't a data center company, you don't need to spend money
handling expensive data center operations. AWS let's you focus on your
business and customers.

#### 6. Go global in minutes

With traditionally data center approach, expand to a secondary part of the
world, could take months or years. With AWS it takes minutes.

## References

{% bibliography --cited_in_order --file 2021-01-12-aws-cloud-practitioner-notes-the-cloud-journey %}