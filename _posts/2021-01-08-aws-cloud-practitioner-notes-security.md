---
layout: post
title: AWS cloud practitioner notes - Security
date: 2021-01-08 01:06:05.000000000 -03:00
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

The AWS security model is shared meaning, AWS is responsible for the security of the cloud, and you, the customer is responsible for
the security in the cloud.

AWS controls the servers, data centers and all the layers in this section.

## Module 6 - Shared responsibility model

### Customer responsibilities:

Customers are responsible for everything they put in AWS.

```shell
____________________________________________________________________________________________
|C|__________________________________ CUSTOMER DATA _______________________________________|
|U|________________________________________________________________________________________|
|S|_________________ PLATFORM, APPLICATIONS, IDENTITY AND ACCESS MANAGEMENT________________|
|T|________________________________________________________________________________________|
|O|_________________ OPERATING SYSTEMS, NETWORK AND FIREWALL CONFIGURATION ________________|
|M|________________________________________________________________________________________|
|E|________________________________________________________________________________________|
|R|_ CLIENT-SIDEDATA ENCRYPTION | SERVER SIDE ENCRYPTION | NETWORKING TRAFFIC PROTECTION __|
```

### AWS responsibilities:

AWS is resposible for security of the cloud.

```shell
____________________________________________________________________________________________
|A|_____________________________________ SOFTWARE _________________________________________|
| |_____ COMPUTE ______|______ STORAGE ______|_____ DATABASE _____|_____ NETWORKING _______|
|W|________________________________________________________________________________________|
| |_________________________ HARDWARE/AWS GLOBAL INFRASTRUCTURE ___________________________|
|S|______ REGIONS _____|____________ AVAILABILITY ZONES __________|__ EDGE LOCATIONS ______|
```

## Module 6 - User permissions and access

AWS Identity and Access Management allows you to manage access to AWS services
and resources.

- The root account is the owner of the AWS account, this is the default permission for an aws created account. The root user account controls any resources. As such, the recommended security approach is to turn on MF2, for this account.
- Users created by IAM, have no permissions by default. (Principle of least privilege)

*As a best practice approach, avoid using root for everyday tasks. Instead
create an user and assign it the needed permissions.*

IAM policy is a JSON document that describes wich apis calls an user can
or can't do. This is a policy example:

```json
{
    "version": "2012-10-17",
    "Statement": {
        "Effect": "Allow",
        "Action": "s3:ListBucket",
        "Resource": "arn:aws:s3:::my_resource"
    }
}
```

The following table describes the possible values for each field in the
IAM policy JSON:

|Option|Value|
|------|-----|
|Effect|Allow / Deny|
|Action|Any API call|
|Resource|Which AWS resource the API call is for|

IAM groups are groups of users, you can attach policies to a group and all
users in that group will have the permissions listed there.

IAM roles have associated permissions that allow or deny actions in aws, and
this roles can be assume for temporary amount of time.

## Module 6 - Organizations

AWS Organizations are used to consolidate and manage  multiple AWS accounts,
in a centralized manner. This approach avoids the problem of managing
multiple aws accounts.

## Module 6 - Compliance

Compliance checks if a given regulation is being followed, countries might
have different compliances. For example:

- EU - GDPR
- Health care in US - HIPAA

Aws has already built data center, infrastructure and networking following
industries best pratices for security, and you as a customer inherit
those practices as well.

Enabling data protection is a configuration setting on the resource. AWS offers
whitepapers are documents you can download and use for compliance reports.

- AWS Artifact - compliance reports done by thrid parties {% cite aws_artifact --file 2021-01-08-aws-cloud-practitioner-notes-security %}
- AWS Compliance - compliance information in all one place {% cite aws_customer_compliance_center --file 2021-01-08-aws-cloud-practitioner-notes-security %}

## Module 6 - Denial-of-service attacks

DDOS attack objective is to put down a given service such that it can no longer
respond to request from clients.

- HTTP level attacks - too expensive to overwhelm AWS, not impossible though
- UDP flood - security group
- SLOWLORIS attack - Elastic load balancer

AWS WAF uses a web application firewall to filter traffic from bad actors.

### AWS Shield standard

Autimatically protects all AWS customers at no cost. It protects from the most
common and frequent types of DDoS attack.

### AWS Shield advanced

It is a paid service that provides detailed attack diagnostics.

## Module 6 - Additional security resources

- encryption at rest (when the data is idle). Server side encryption at rest is enable in all dynamoDB data
- encryption in transit. SSL to data in transit encryp data. (SQS, S3, RDS).

### Amazon inspector

runs an automated security assesment infrastructure, check deviations against best practices.

### Amazon GuardDuty

It analyses streams of data from network, vpc logs and dns logs. Runs independently
from aws services.

## References

{% bibliography --cited_in_order --file 2021-01-08-aws-cloud-practitioner-notes-security %}