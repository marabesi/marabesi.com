---
layout: post
title: Node.js certification JSNAD - Streams
date: 2021-01-16 01:06:05.000000000 -03:00
image: 
type: article
published: true
status: published
categories:
- nodejs
- JSNAD
tags:
- streams,
- data,
- node,
- writable,
- events,
- stream,
- error,
- js,
- csv,
- Node,
- readable,
- console,
- generator,
- content,
- Streams,
- file,
- memory,
- stream events,
- emitted when,
- js streams,
- data available,
- passing through,
- more data,
- error occurred,
- application,
- developer
---

I already wrote about streams in PHP and how to use them, in the same way
this post focuses on the Node.js streams. The aim here is to cover the streams
in Node.js, the concepts are fundamentaly the same, but each language has its
implementation detail.

This post is based on the content provided by the hey(node) list to prepare
for the nodejs certification exam (JSNAD) {% cite node_certification_streams --file 2021-01-16-node-certification-jsnad-streams %}

## Benefits of streams

Streams is a collection of data which isn't available all at once, instead,
we can work on that, piece by piece, it improves performance and also 
avoids the spiking the server resources. For example, for files, with streams we don't need
to read all the content in memory at once. Reading the entire file at once
can lead to high consume on the memory.

## Streams type

1. Readable streams: A stream for read data, a source of input. You can't write
2. Writable stream: A stream for write data, the destination of the data to write to
3. Duplex stream: This one implements both, writable and readable
4. Transform: Like Duplex, but transforms the data passing through
5. Passthrough: A special type of Transform but, does not change the data passing through

## Stream events

Streams can be consumed using events, as such readable and writable
streams have its own events to handle data. This section describes
the differences of each event used by Node.js streams and
also list open source projects that are using streams.

### Readable stream events

- *data*: Emitted when a chunk of data arrives
- *readable*: Emitted when there is data waiting for being consumed
- *end*: Emitted when there is no more data available
- *error*: An error has occured

### Writable stream events

- *drain*: The writable streams buffer has been cleared and is waiting for more data
- *finish*: All data has been written
- *error*: An error occured while writing the data

{% cite csv_nodejs --file 2021-01-16-node-certification-jsnad-streams %} in its
examples folder {% cite csv_nodejs_examples --file 2021-01-16-node-certification-jsnad-streams %}
uses the event streams as described in the previous section, the following
code snippet was extracted from the commented source and modified to depict
the Redable stream usage:

```javascript
const fs = require('fs')
const csv = require('csv')

console.time('stream_file')

fs.readFile('./dump.csv', (error, content) => {
  if (error) {
    throw error
  }

  const generator = csv.parse(content)
  
  generator.on('readable', function() {
    while(data = generator.read()){
      console.log(data)
    }
  });
  
  generator.on('end', function() {
    console.timeEnd('stream_file')
    console.log('finished')
  });

  generator.on('error', function() {
    console.error('something went wrong)
  })
})
```

Even though,the readFile loads the content of the file at once in memory,
this example depicts the usage of the events: `readable`, `end` and `error`.
Keep in mind that this approach depicts the events usage only, but, nodejs
offers the `pipe` as well.

## References

{% bibliography --cited_in_order --file2021-01-16-node-certification-jsnad-streams %}