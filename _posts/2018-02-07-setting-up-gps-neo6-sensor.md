---
layout: post
title: Setting up GPS NEO 6 sensor
date: 2018-02-07 17:30:18.000000000 -02:00
image: /images/posts/2018-02-07-setting-up-gps-neo6-sensor/cover.jpg
table_of_contents: 2018-02-07-setting-up-gps-neo6-sensor/table-of-contents.md
type: article
published: true
status: publish
categories:
- post
- raspberry
tags:
- gps,
- GPS,
- NEO,
- command,
- neo 6,
- raspberry,
- Raspberry,
- pi,
- gpsd,
- cgps,
- sensor,
- serial,
- uart,
- gpio,
- GPIO,
- iot,
- port,
- client,
- signal,
- work
---

Recently I have had the chance to set up a basic IoT project which consists of localization by GPS.
The decision was to work with the Raspberry board over the arduino based on the number os shields
that arduino would use.

To get start with we would need a Wi-Fi(or GSM) shield, which on raspberry is just an adapter. The
second point was the MQTT protocol and the code maintenability. Whereas on arduino is just plain C,
with Raspberry we have more options. One could argue that we can use the standard firmata
to avoid using C, but just for clarity this wasn't the crucial point.

After deciding which board to use the time was to gather the GPS. As you might have guesses the GPS
NEO 6 was the chose one (most of NEO6 comes with an external antena, but here I used one
with a internal antena).

In this post you will see the following:

1. Wiring up the components
2. How to configure the Raspberry Pi and read data from the GPS
3. Enable the UART mode in a specific GPIO
4. Gotchas, a few tricks and tips to help you mitigate problems

## IMPORTANT - EDIT 05/01

The antenna that comes with this sensor is really cheap and takes time to receive the signal from the satellites.
Make sure to be outside, and with a clear vision from the sky to improve your success of getting a signal.

The sensor has a PPS indicator (green light), when blinking it indicates that the signal is comming and
therefore you are receiving the correct information. Otherwise the light will keep on, which means that
it is trying to connect.

## Wiring up

*IMPORTANT*: Before we start, the version of Raspberry Pi that I used is the model 2 B+, but it should
be really simple to adapt for any Pi version.

The first thing to be in mind is the wiring, be careful while seeting up the wires RX and TX. I just made
a mistake that was plugin TX on TX and RX to RX. To avoid any further erros, the table below
show the pin name (from the GPS NEO 6) and where it should go on the Raspberry Pi.

|GPS NEO 6|Raspberry Pi|
|---------|------------|
| `RX   ->` | TX - GPIO 15 |
| `TX   ->` | RX - GPIO 16 |
| `VCC  ->` | 3.3v or 5v |
| `GND  ->` | GND |

The table below was build looking at the [pi4j](http://pi4j.com/pins/model-b-plus.html){:target="_blank"} project, which has an
image to better illustrate the pins. For now the figure below should do the work.

![GPS NEO 6 wires](/images/posts/2018-02-07-setting-up-gps-neo6-sensor/wires.png)

If you follow everything as described in the table and in the figure, you should see a green light on
the GPS NEO 6. This means that at least the power was plugged correctly. The next step
is to check the RX and TX connections which will send to use the data through the serial port.

The first test doesn't need any special software, we are going to connect using the cat command
directly to the serial port.

>
>
> *IMPORTANT*: Before testing the signal from the sensor is needed to convert the GPIO from IN to
> UART in order to do that we need the GPIO numbers that we connected our GPS, in our case
> it is 15 and 16.
>
> Next just type the following command to switch the GPIO mode:
>
> ```shell gpio mode 15 ALT0; gpio mode 16 ALT0 ```
>
> Doing that will the work, but keep in mind that once you restart the Pi the default configuration
> will be restored. The ideal step here is to add this command into the `/etc/rc.local`, so
> everytime the Pi restarts it will run this command automatically.

Access your Raspberry Pi through SSH or plugin an keyboard and monitor to get to the shell. Once
you are in, type the following command:

```shell
sudo cat /dev/serial0
```

If everything is correct you should see the following response:

[![Font: Waveshare.com](https://www.waveshare.com/w/upload/b/bb/UART-GPS-NEO-6M-User-Manual-2.png)](https://www.waveshare.com/wiki/UART_GPS_NEO-6M){:target="_blank"}

<small>Font: Waveshare.com</small>

The serial port `/dev/serial0` is an alias to the real one `/dev/ttyAMA0`. If for some reason your serial
port is not the same as this post, first find it and replace the serial with the correct one.

Finally we have everything done to use the GPS daemon and client. If you have a look at the raw
logs from the serial port, the text has an pattern but is difficult to understand and difficult
to interact with (parse and use the data for an application). For that reason the project
[GPSD](http://www.catb.org/gpsd){:target="_blank"} exists, which is a library to help to communicate with the GPS sensor (
not to mention the amazing interface between the sensor and the client).

To use it, just run the `apt-get` command as the following:

```
sudo apt-get install gpsd gpsd-clients
```

`gpsd` is the deamon that runs in the backgroud to fill up the GPS client, without the deamon
is not possible to fetch the data that comes from the GPS. Even if you try to access the client
with the command `cgps` it will give you a error message.

```shell
pi@raspberrypi:~ $ cgps
cgps: no gpsd running or network error: -6, can't connect to host/port pair
```

`cgps` is the client that comes from the package `gpsd-clients` that we've installed.

To prevent the error we need to start the deamon passing as an argument the serial
port in which our GPS is connected to.

```shell
gpsd /dev/serial0
```

The command `cgps` should work as a spected now. The picture below ilustrates the result
after invoking the command.

![cgps client response](/images/posts/2018-02-07-setting-up-gps-neo6-sensor/cgps.png)

obs: The response given by the `cgps` is a JSON, to understand the content of each key
check out the [official documentation](http://www.catb.org/gpsd/gpsd_json.html){:target="_blank"}.

## Gotchas

In my experience the GPS NEO 6 takes a long time to start receiving signal from the satellites accross the earth.
It takes from 30 minutes to 2 hours, when it suposed to be less than 1 minute. Keep in mind that it can happen
to you as well but don't worry, just wait and keep an eye in the logs.

## References

* [RASPBERRY PI & THE NEO 6M GPS](http://www.instructables.com/id/Raspberry-Pi-the-Neo-6M-GPS){:target="_blank"}
* [gpsd — a GPS service daemon](http://www.catb.org/gpsd){:target="_blank"}
