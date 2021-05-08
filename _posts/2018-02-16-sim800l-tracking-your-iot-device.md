---
layout: post
title: SIM800L tracking your IoT device
date: 2018-02-16 20:39:18.000000000 -02:00
type: article
image: /images/posts/2018-02-16-sim800l-tracking-your-iot-device/cover.jpeg
table_of_contents: 2018-02-16-sim800l-tracking-your-iot-device/table-of-contents.md
published: true
status: publish
categories:
- posts
tags:
- SIM,
- APN,
- web,
- arduino,
- Arduino,
- Uno,
- board,
- command,
- Command,
- sim800l,
- iot,
- tracking,
- serial,
- Serial,
- SAPBR,
- gps,
- gps neo6,
- at,
- at commands,
- password,
- location,
- gsm
---

After a while testing the [GPS NEO6](/post/raspberry/2018/02/07/setting-up-gps-neo6-sensor.html) I ordered a new guy
to play around with GSM connection and GPS at the same time. The sensor this time is the SIM800L, which basically
is an interface between the SIM card and the Arduino Uno (could be any board, not Arduino Uno only).

The version used is the *Arduino Uno*, so everytime you see Arduino in the text I am talking about the Uno version.

For purpose of test I started using the Raspberry Pi (model B+) board but ended up with Arduino, the switch is given by the
facility of send the skecth out to the Arduino. While in the Raspberry Pi you should wait till the board is up
and running. Further tests can lead me back to the Pi, but for this post the examples will be on Arduino.

## SIM800L

The board used is the SIM800L without any specific breakboard or something like that. Newest versions of the SIM like
SIM900 comes with a antenna and a bigger board.

Besides the board is needed to have a *micro SIM* card. In my case I had to use an adapter to transfor the nano SIM I
have into the micro.

[![Font: Mi.com](/images/posts/2018-02-16-sim800l-tracking-your-iot-device/sim-type.jpeg)](http://c.mi.com/thread-46072-1-0.html){:target="_blank"}

<small>Fonte: Mi.com</small>

**IMPORTANT**: Make sure to have a SIM card with 2G, 3G or 4G anabled (you can test it plugin the SIM card on yout phone
and try to access any web page), and have in hands the APN, the APN user and APN password.

## Wiring

This sensor requires just 4 wires to start with, but there is a gap in the voltage that it operates. The following
table holds the pins where the wires should go to.

|SIM800L| Arduino Uno|
|-------|------------|
| NET | Antenna connection |
| VCC | 5v |
| RST | - |
| RX | 8 |
| TX | 9 |
| GND | GNG |

To make it easier to understand, the following image illustrates how the wiring should be done.

![SIM800L wiring](/images/posts/2018-02-16-sim800l-tracking-your-iot-device/sim800.png){:target="_blank"}

<small>[SIM800L Font: Lelong.my](http://www.lelong.com.my/arduino-sim800l-gprs-gsm-tracking-module-antena-sim-slot-robotedu-183929865-2018-10-Sale-P.htm){:target="_blank"}</small>

<small>[Arduino Uno Font: Nooelec](http://www.nooelec.com/store/arduino-uno-r3.html){:target="_blank"}</small>

> If you are planning to use your device for a long time, it is good to mention that
> there is an resistor to add and deliver the 4.2v instead of 5v. For that check this [repo](https://github.com/cristiansteib/Sim800l){:target="_blank"}
> and make sure to wire up using the resistor.
>
> As this post has the goal to keep as simple as possible, I am not going to use the resitor.

## Sketch (commands AT 101)

**IMPORTANT 2**: Here I assume that you can compile and run a scketch into the Arduino,
if not, please find out how to to that and come back later.


Before we go any deeper on the libraries available out there, the proposal here is to upload a simple
sketch to interact with the serial port. The reason behind it is that the SIM800L handles AT ([instructions
to command a modem](https://www.codeproject.com/Articles/85636/Introduction-to-AT-commands-and-its-uses){:target="_blank"})
commands into the SIM card, and in order to understand what is going on we need to
understand the AT commands first. The following sketch reads and writes to the serial port.

```c
#include <SoftwareSerial.h>

SoftwareSerial gsm(9, 8);

void setup() {
   Serial.begin(9600);

   while(!Serial);

   gsm.begin(9600);
   delay(1000);

   Serial.println("Ready to receive commands");
}

void loop() {
   if(gsm.available()){
     Serial.write(gsm.read());
   }

   if(Serial.available()){
     gsm.write(Serial.read());
   }
}
```

Once we have the sketch up and running in our Arduino, is time to understand the AT commands. The first thing
to send trhough the serial interface is the command `AT`. This is the most basic command
to see if the sensor is up and running, if everything is correct an `OK` is printed back.

![AT command](/images/posts/2018-02-16-sim800l-tracking-your-iot-device/arduino-serial.png){:target="_blank"}

The next step is to understand what is required to setup the GPRS mode in our SIM card. For that we are
going to rely a lot on the SIM800L official documentation
available [here](https://www.elecrow.com/download/SIM800%20Series_AT%20Command%20Manual_V1.09.pdf){:target="_blank"}.

## Enabling GSM location

By default the SIM cards doesn't come with any configuration, we should setup manually for every action
we would like to do with it. To enable the tracking (that is our goal) we should do the following:

1. Enable the GSM location mode
2. Authenticate with the APN
3. Request the data regarding the SIM location

To enable the GMS location mode is a matter of sending the correct `AT` command through the serial.

```
AT+SAPBR=3,1,"CONTYPE","GPRS"
```

Next step is to authenticate the APN, we do that in four steps, first setting the APN, followed
by the username, the password and finally activate the bearer. Each command should be executed
separately and before execute the next one, macke sure to get an **OK** response from the serial.

> There is an website with the possible APNS around the world, if you don't know which one
> is yours, access this [link](https://www.hw-group.com/products/HWg-Ares/HWg-Ares_GSM_APN_en.html){:target="_blank"}

```
AT+SAPBR=3,1,"APN","{here goes your APN}"
```

After the APN replace the text `{here goes your APN}` with your APN provider.

```
AT+SAPBR=3,1,"USER","{here goes your username}"
```

After the USER replace the text `{here goes your username}` with your APN username (sometimes it
will be empty, so just leave as it is).

```
AT+SAPBR=3,1,"PWD","{here goes your password}"
```

After the PWD replace the text `{here goes your password}` with your password (sometimes it
will be empty, so just leave as it is).

```
AT+SAPBR=1,1
```

By now the led sensor should start blinking more frequently than it used to, it indicates that
a connection has been stablished and now you can communicate freelly with the GSM network. To
guarantee that everything is working as expected, there is one command to retrieve the current
IP in use by the SIM card.

```
AT+SAPBR=2,1
```

The command response should be something similar to the figure below, other than that or only `0.0.0.0` indicates
that something went wrong.

Finally we are ready to request the latitude and longitude to know where our SIM card is in the world. As you may
have imagined it is done through an `AT` command as well.

```
AT+CIPGSMLOC=1,1
```

It should return an string containing the latitude, longitude, current date, and current time. The figure below
illustrates the response receive in the serial monitor.

![Response from SIM800L after requireing the current location](/images/posts/2018-02-16-sim800l-tracking-your-iot-device/current-location.png){:target="_blank"}

## Edit 04/03/2018

During a few tests with the SIM, it turns out that the accuracy in the latitude and longitude is not so good as expected.
Sometimes it gives the same location even with 10 meters of change.

## References

[Tracking with GPS NEO 6](/post/raspberry/2018/02/07/setting-up-gps-neo6-sensor.html){:target="_blank"}

[SIM (Subscriber Identity Module)](https://en.wikipedia.org/wiki/Subscriber_identity_module){:target="_blank"}

[SIM Card types](http://c.mi.com/thread-46072-1-0.html){:target="_blank"}

[Arduino Serial](https://www.arduino.cc/en/Tutorial/SoftwareSerialExample){:target="_blank"}

[AT commands](https://www.codeproject.com/Articles/85636/Introduction-to-AT-commands-and-its-uses){:target="_blank"}

[SIMCOM AT commands PDF](https://www.elecrow.com/download/SIM800%20Series_AT%20Command%20Manual_V1.09.pdf){:target="_blank"}

[APN providers worldwide](https://www.hw-group.com/products/HWg-Ares/HWg-Ares_GSM_APN_en.html){:target="_blank"}
