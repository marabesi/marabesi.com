---
layout: post
title: AWS cloud practitioner notes - Storage and databases
date: 2021-01-07 01:06:05.000000000 -03:00
image: 
type: article
published: true
status: published
categories:
- aws
- ccp
tags:
- Amazon,
- aws,
- AWS,
- S3,
- EBS,
- data
- database,
- databases,
- DynamoDB,
- Module,
- RDS,
- objects,
- storage,
- type,
- service,
- migration,
- files,
- application,
- volumes,,
- store,
- Use case
---

## Introduction

This module describes the AWS services for storage and databases. AWS has
different services that goes from file storaging service to serverless
database.

## Module 5 - Instance stores and AmazonElastic Block Store

Block storage level are places to store files, EC2 has different types
of storage as well.

- instance store volumes (physical attached to AWS host) - temporary type {% cite ec2_instance_store --file 2021-01-07-aws-cloud-practitioner-notes-storage-and-databases %}
- EBS are virtual hard drives or EBS volumes - persistant type

Incremental snapshops (backup) can be taken from EBS volumes and restored later.

## Module 5 - Amazon Simple Storae Service (Amazon S3)

Amazon S3 is a storage service that allows you to store and retrieve files at any scale and pay only for what you use.

- Store data as object
- Storage objects in buckets
- Upload maximum object size of 5TB
- Version objects
- Create multiple buckets

### S3 classes (or tiers)

- S3 standard 99,99999999999% of durability 
- S3 standard infrequent access (backups, disaster recovery files)
- S3 One Zone-Infrequent access (S3 one Zone-IA)
- S3 intelligent-Tiering (unkown or changing access patterns)
- AWS Glacier to archive data (Able to retrieve objects in minutes)
- AWS Glacier deep archive (Able to retrieve objects within 12 hours)

It is possible to move objects between tiers through S3 lifecycle management. For example, from s3 standard to s3 infrequent access.

### Comparing Amazon EBS and Amazon S3

|EBS|S3|
|---|--|
|up to 16TB|Unlimited storage|
|Survive EC2 termination|Indiviual objects up to 5 TB|
|Solid state by default|Write once/read many|
|HDD options|99,99999999999% durability|

#### Use case 1 - App to upload a photo file

S3 is the prefered approach here, for the following reasons:

- Web enabled
- Regionally distributed
- Offers cost savings
- Serverless

#### Use case 2 - Video editing on a file

Object storage treats every file as a complete discreate object, perfect for files that are consumed as a whole.

Block storage breaks the files in smaller pieces (blocks), for a bunch of a small changes, EBS is preverable.

Complete changes = S3
Complex read, write, change functions = EBS

## Module 5 - Amazon Elastic File System (EFS)

Multiple instances can access the data in EFS at the same time, it scales
up and down as needed. The differences between EBS and EFS are:

|EBS|EFS|
|---|---|
|Amazon EBS are attached to EC2 instances|Multiple instances reading and writing simultaneosly|
|Availability zone level resource|True file system/multiple availability zones|
|Need to be in the same availability zone to the attached EC2 instance|Regional resource|
|EBS volumes do not automatically scales|Automatically scales up and down|

## Module 5 - Amazon Relational Database Service (RDS)

- Automated patching
- Backups
- Redundancy
- Failover
- Disaster recovery

### Amazon Aurora

- MySQL or PostgreSQL support
- 1/10th cost of commercial databases
- Data replication
- Up to 15 read replicas
- Automated backup to S3

## Module 5 - Amazon DynamoDB

DynamoDB is serverless in a sense that you don't have to provision or, install, maintain or operate the server that the database is in. DynamoDB
scales automatically to adjust the changes in the database.

- Non-relational databasel
- Milisecond response time
- Fully managed
- Highly scalable

### Comparing Amazon RDS and DynamoDB

|RDS|DynamoDB|
|---|--------|
|Automatic high availability|Key-value|
|Customer ownership of data|Massive throughput capabilities|
|Customer ownership of schema|PB size potential|
|Customer control of network|Granular API access|

#### Use case 1 - sales supply chain application

RDS is the choice as its application is built for analytics and requires
complex relationships between the data.

#### Use case 2 - Employee contact list application

Single table territory, potentially relational, but not required as the
relationship between data would create an overead maintaining the
relationships.

## Module 5 - Amazon Redshift

Amazon Redshift is a dataware house service used for analytics. You
can collect data from many sources and see the relationships accross
the data.

## Module 5 - Amazon Database Migration Service (AWS DMS)

Amazon Database Migration Service helps you to migrate databases into
aws.

### Homogenous databases

The first type of migration is: homogeonous. Homogenous databases are migrations across the same database type. For example: 

- MySQL to Amazon RDS for MySQL
- Microsoft SQL Server to Amazon RDS for SQL Server
- Oracle to Amazon RDS for Oracle

### Heterogeneous databases

The second type of migration is: heterogeneous databases. Which provides
a migration for different database vendors.

For this type of migration there are two steps, the first is the convertion from the database source into the origin database. Then
the last step is to do the migration.

## Module 5 - Additional database services

- Amazon DocumentDB - document database that supports MongoDB
- Amazon Neptune - Graph database service
- Amazon Quantum Ledger Database - Review a complete history of all the changes that have been mande to your application data
- Amazon Managed Blockchain - A service used to create managed blockchain networks
- Amazon ElastiCache - A service that adds caching layer to improve application response time
- Amazon DynamoDB accelerator - In memory cache for DynamoDB

## References

{% bibliography --cited_in_order --file 2021-01-07-aws-cloud-practitioner-notes-storage-and-databases %}