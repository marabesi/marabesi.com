---
layout: post
title: AWS cloud practitioner notes - Networking
date: 2021-01-06 01:06:05.000000000 -03:00
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
---

## Introduction

Amazon VPC (Virtual Private Cloud) lets you provision a isolated section of aws
cloud, and deliver aws services that you control. Public and private grouping
of resources are known as subnets.

- Public subnet
- Private subnet

## Module 4 - Connectivity to AWS

**Internet gateway** allows public traffic from the internet to access the VPC.

```shell
                                   ____________________________________________
                                   | AWS cloud                                |
                                   |     ___________________________________  |
                                   |     |VPC                              |  |
__________                         |   __|_________                        |  |
| Client | inernet request         |   |internet  |                        |  |
|________| --------------------------> |gateway   |                        |  |
                                   |   |__________|                        |  |
                                   |     |                                 |  |
                                   |     |                                 |  |
                                   |     |                                 |  |
                                   |     |_________________________________|  |
                                   |__________________________________________|
```

**Virtual private gateway** allow access to private resources in a VPC.

```shell
                                   ____________________________________________
                                   | AWS cloud                                |
                                   |     ___________________________________  |
                                   |     |VPC                              |  |
_______________                    |    _|_________                        |  |
| Coportate   |                    |   | virtual   |                       |  |
| data center |        internet    |   | private   |                       |  |
|_____________| ---------------------->| gateway   |                       |  |
                    VPN connection |   |___________|                       |  |
                                   |     |                                 |  |
                                   |     |                                 |  |
                                   |     |                                 |  |
                                   |     |_________________________________|  |
                                   |__________________________________________|
```

**AWS Direct connect** provides a direct connection from private data center to AWS.

```shell
                                           ____________________________________________
                                           | AWS cloud                                |
                    ____________________   |     ___________________________________  |
                    |                  |   |     |VPC                              |  |
_______________     |AWS direct connect|   |  ___|_________                        |  |
| Coportate   |     |location          |   |  | virtual   |                        |  |
| data center |     |                  |   |  | private   |                        |  |
|_____________|---->|AWS direct        |----->| gateway   |                        |  |
                    |connect end point |   |  |___________|                        |  |
                    |                  |   |     |                                 |  |
                    |                  |   |     |                                 |  |
                    |__________________|   |     |                                 |  |
                                           |     |_________________________________|  |
                                           |__________________________________________|
```

AWS networking secuirty features:

- Network hardening
- Application security
- User identity
- Authentication and authorization
- Distributed denial of service prevention
- Data integrity
- Data encryption

Network ACL does not evaluate the package content, it evaluates only
if the package can go in or out.

Every ec2 comes with a security group, by default all connections are blocked.

- Security groups are stateful
- Network ACL is stateless (allow all inbound and outbound traffic)