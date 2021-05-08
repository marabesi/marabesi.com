---
layout: post
title: Running PHP with Arduino
date: 2017-03-01 01:06:05.000000000 -03:00
image: /images/posts/2017-03-01-running-php-with-arduino/cover.jpg
table_of_contents: 2017-03-01-running-php-with-arduino/table-of-contents.md
type: article
published: true
status: published
categories:
- Post
tags:
- stream,
- public,
- Arduino,
- path,
- PHP,
- register,
- file,
- read,
- fopen,
- contents,
- arduino,
- php,
- serial,
- iot,
- wrapper
---

Lately I'e been playing with Arduino and PHP to create simple demos and see how the interaction
between them works. For my surprise it worked really well and I could at least do the blink example with few lines
of code.

From now on I' assuming that you'e played around with Arduino and feel familiar with some terms like, execution loop,
setup, pins and LED.

I used Arduino Uno to keep the things as simple as possible, but any Arduino family board is supported.

## Understanding a bit of streams

The first thing that came to my mind at least was to use the command line to interact with the serial port in the 
Arduino board. It could have worked as expected but for sure is not the best approach, since we are using a workaround.

I say workaround based on other languages where we can have native integration with those devices, have you ever heard
about pi4j? What about Jhonnyfive? Those libraries provide a simple, elegant and the most important a native connection
direct to the board.

To interact via command line with our Arduino we would simply do, something like this (assuming that the Arduino is
connected via USB cable)
 
``` bash
echo '1' >> /dev/cu.wchusbserial1410
```

The command above will send 1 to the Arduino serial port and blink the RX LED in the Arduino board.

We have taken the first step and communicated successfully to our Arduino board, but it is terminal only. Our
goal here is do it via PHP, and as programmers we usually take the easiest path. Which means to send this command
line through PHP script.

``` php
<?php
shell_exec("echo '1' >> /dev/cu.wchusbserial1410");
```

The PHP script above does the job well, but its not elegant. The error handling is terrible.

Comes in place PHP streams, I'm sure you've used them before. PHP developers are used to streams and don' know that.
 
### Streams

Streams are accessible by any function that handles files on PHP, such as *fopen* and *file_get_contents*. The magic happens when
we use what is known as **wrappers** to handle different resources. Wrappers allow SSH connection, FTP handling or even 
read zipped files content without extracting them.

PHP comes with 12 wrappers ready to use as shown in the list bellow, and if is needed something specific that PHP does not 
has is possible to create custom streams using the function **stream_wrapper_register**.

1. file://
2. http://
3. ftp://
4. php://
5. zlib://
6. data://
7. glob://
8. phar://
9. ssh2://
10. rar://
11. ogg://
12. expect://

The magic here is to create a Arduino wrapper, so we could do something like

```php
<?php
$resource = fopen('arduino://ttyUSB0', 'r+');
print fread($resource, 1024); 
```

### arduino://

PHP has a good documentation about creating your own wrapper, but I'm going to clarify a few points here.

The first is the class *streamWrapper*, which is a prototype to follow and create our own class. Though the weird part
is that we don't extend anything we just need to declare the right methods and it'll just work.

The class is big but luckily we don't need to implement every method, described below.

```php
<?php
class streamWrapper {
    /* Properties */
    public resource $context ;
    /* Methods */
    __construct ( void )
    __destruct ( void )
    public bool dir_closedir ( void )
    public bool dir_opendir ( string $path , int $options )
    public string dir_readdir ( void )
    public bool dir_rewinddir ( void )
    public bool mkdir ( string $path , int $mode , int $options )
    public bool rename ( string $path_from , string $path_to )
    public bool rmdir ( string $path , int $options )
    public resource stream_cast ( int $cast_as )
    public void stream_close ( void )
    public bool stream_eof ( void )
    public bool stream_flush ( void )
    public bool stream_lock ( int $operation )
    public bool stream_metadata ( string $path , int $option , mixed $value )
    public bool stream_open ( string $path , string $mode , int $options , string &$opened_path )
    public string stream_read ( int $count )
    public bool stream_seek ( int $offset , int $whence = SEEK_SET )
    public bool stream_set_option ( int $option , int $arg1 , int $arg2 )
    public array stream_stat ( void )
    public int stream_tell ( void )
    public bool stream_truncate ( int $new_size )
    public int stream_write ( string $data )
    public bool unlink ( string $path )
    public array url_stat ( string $path , int $flags )
}
```

<small>
    The code above was taken from PHP.net official documentation and you can see it at
    [http://php.net/manual/en/class.streamwrapper.php](http://php.net/manual/en/class.streamwrapper.php){:target="_blank"}
</small>

The methods we are going to needs are:

* stream_open
  * This method is called when we invoke any function that will operate in our wrapper
  
* stream_read
  * This method is going to be invoked when is needed to read data from the source
  
* stream_write
  * This method is the opposite of stream_read, it will write in a given source. Usually we use this with *fwrite* or *file_put_contents*

* stream_eof 
  * This method is used to know when the stream has reached the end of its content, we can read eof as End Of File

```php
<?php

namespace Arduino;

class Wrapper
{

    private static $wrapperName = 'arduino';
    private $path;

    public function __construct()
    {
        self::register();
    }

    public function stream_open($path, $mode, $options = null, &$opened_path = null)
    {
        $realPath = str_replace('arduino://', '', $path);

        $this->path = fopen($realPath, 'r+');

        return true;
    }

    public function stream_read($count)
    {
        sleep(2);
        return fgets($this->path, $count);
    }

    public function stream_write($data)
    {
        sleep(2);
        return fwrite($this->path, $data);
    }

    public function stream_eof()
    {
        return fclose($this->path);
    }

    public static function register()
    {
        // if we already defined the wrapper just return false
        foreach (stream_get_wrappers() as $wrapper) {
            if ($wrapper == self::$wrapperName) {
                return false;
            }
        }

        stream_wrapper_register(self::$wrapperName, self::class);
    }
}
``` 

The last step is to register the wrapper before call it. In order to do that, just call the function *stream_wrapper_register*
passing the wrapper name(alias) and the class name.

```php
<?php
stream_wrapper_register('arduino', Arduino\Wrapper::class);
```

> In our Wrapper class we have a register method already, to turn easier the wrapper registration, instead
of using the PHP function you could call *\Arduino\Wrapper::register()*.


In conclusion to write a simple wrapper is easy. I would say that it is easier than build a simple CURD, the class
we created is very small but does the jog really well.

To test it, just connect your Arduino USB in any port and use the wrapper with any function that you like, I prefer
to use *fopen*, but the examples below are with both, *fopen* and *file_put_contents*.

Are you wondering why do I wrote two times the sleep function call? This is very simple, Arduino takes at least 1 second
to set everything up and start to respond through the serial port. Adding 2 seconds we guarantee that all the date
that we send to it will be received.

### fopen

```php
<?php
\Arduino\Wrapper::register();

$resource = fopen('arduino://ttyUSB0', 'r+');
print fwrite('hello Arduino'); 
```

### file_put_contents

```php
<?php
\Arduino\Wrapper::register();

print file_put_contents('arduino://hello Arduino');
```

## Real usages

A good example of using custom PHP streams is Amazon and it' storage service called S3. Amazon provides a SDK
in PHP which uses a custom wrapper to store data in the cloud.

<small>
    Official documentation can be found at
    [http://docs.aws.amazon.com/aws-sdk-php/v3/guide/service/s3-stream-wrapper.html](http://docs.aws.amazon.com/aws-sdk-php/v3/guide/service/s3-stream-wrapper.html){:target="_blank"}
</small>

With S3 wrapper to download a file is a matter of calling the function file_get_contents

```php
<?php
$data = file_get_contents('s3://bucket/key'); 
```

