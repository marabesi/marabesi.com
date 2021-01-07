---
layout: post
title: AWS cloud practitioner notes - Monitoring and Analytics
date: 2021-01-09 01:06:05.000000000 -03:00
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

AWS offers a variety of tools for analytics and monitoring, such as Amazon CloudWatch, AWS CloudTrail and AWS Trusted Advisor.

Monitoring: Observing systems. collecting metrics, and then using data
to make decisions.

## Module 7 - Amazon CloudWatch

Amazon CloudWatch allows you to monitor you aws infrastructure and the
applications you run in AWS in real time.

- Metrics are avaialble tied to your resources (cpu utilization of a ec2 instance)

With cloudWatch you can:

- Access all your metrics from a central location
- Gain visibility across applications and services
- Reduce MTTR and improve TCO
- Drive insights to optimize applications

### CloudWatch Alarms

You can use CloudWatch Alarms to set alerts based on a given metric that perform
actions based on its value.

### CloudWatch dashboard

CloudWatch dashboard provides a single location to access all the metrics
for the resources.

## Module 7 - Amazon CloudTrail

AWS CloudTrail recors API calls for your account. Every request gets recorded
in the Cloudtrail engine.

## Module 7 - AWS Trusted Advisor

AWS Trusted Advisor is a web service that inspects the AWS environment and
gives real-time best practices recommendations, based on five pilars:

- Cost optimizations
- Performance
- Security 
- Fault tolerance
- Service limits

## References

{% bibliography --cited_in_order --file 2021-01-09-aws-cloud-practitioner-notes-monitoring-and-analytics %}