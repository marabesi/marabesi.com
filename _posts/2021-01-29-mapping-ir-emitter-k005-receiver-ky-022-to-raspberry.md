---
layout: post
title: Mapping IR emitter module KY-005 sensor/receiver module KY-022-IR sensor
date: 2021-01-29 01:06:05.000000000 -03:00
image: 
type: article
published: true
status: published
categories:
- iot
tags:
- raspberry pi,
- iot,
- KY-002,
- KY-005,
- ELEGOO
---

For the past few days I have been playing with the kit ELEGOO 37-in-1 Kit and
the first project I wanted to build was a remote control using
raspberry pi and the sensor KY-022 that comes with the kit.
Giving the different sensors and boards I took some time to figure out
the steps I needed to build the project. This post is the detailed
step-by-step that I did to build my personal project using IR sensors.

## Table of contents

1. [Setting up the pi to use IR](#setting-up-the-pi-to-use-ir)
2. [Wiring up](#wiring-up)
3. [Mapping inputs to IR codes](#mapping-inputs-to-ir-codes)
4. [References](#references)

**DISCLAIMER**: This post is focused on the kernel 5.4, and the base hardware
used is as follows:

- Raspberry pi 3 model B +
- Raspbian as a operational system
- Energy supplied via USB cable

**DISCLAIMER 2**: The sections 1 and 2 can be swapped out without any problem. If
you prefer to setup the hardware parte first, then read the section 2 and then section 1.
Therefore, if you prefer to setup the software first (as I preferer), you can
keep the suggested order.

## Setting up the pi to use IR

There are two parts of this puzzle to make it to work, the first is to install
the lirc.

```shell
sudo apt-get install lirc -y
```

Next we are going to configure the boot script to enable the IR package. {% cite peppe8o --file 2021-01-29-mapping-ir-emitter-k005-receiver-ky-022-to-raspberry %}
has the steps to enable the pin to receive IR signal, and I will use the same
approach here. The changes in the file `config.txt` assumes that
the receiver goes in the GPIO 17, ping 11. The transmitter goes in
the GPIO 18, pin 12 {% cite gpio --file 2021-01-29-mapping-ir-emitter-k005-receiver-ky-022-to-raspberry %}.

```shell
sudo nano /boot/config.txt
```

```shell
dtoverlay=gpio-ir-tx,gpio_pin=18 
dtoverlay=gpio-ir,gpio_pin=17
```

Once the change has been made in the file `config.txt`, save it and reboot
the pi. Once back in the pi shell, verify if the devices were enable properly,
executing the following command:

```shell
sudo ls -l /dev/lirc*
```

The output should be something like the following:

```shell
pi@raspberrypi3:~ $ sudo ls -l /dev/lirc*
crw-rw---- 1 root video 251, 0 Jan 31 12:17 /dev/lirc0
crw-rw---- 1 root video 251, 1 Jan 31 12:17 /dev/lirc1
```

One interface for reading signals (`/dev/lirc0`) and the other to send it
(`/dev/lirc1`).

## Wiring up

Wiring up the pi with both sensors was a bit of challenge for me, first because
it was a new sensor that I was working and it was difficult to find in a single
website the wiring with both sensors and in the pi. Often, the tutorials
were for arduino and for one sensor, the transmitter or the receiver {% cite transmitter_wiring_ky005 --file 2021-01-29-mapping-ir-emitter-k005-receiver-ky-022-to-raspberry %}. This
section is the result for the lack of having both sensors on the pi. The
first image depicts the wiring for the transmitter.

![KY022 wiring with raspberry pi 3 b+](/images/posts/2021-01-29-mapping-ir-emitter-k005-receiver-ky-022-to-raspberry/ky022.jpg)

| Pi PIN | Transmitter PIN |
|--------|-----------------|
| 11 (GPIO 17) | YELLOW |
| 5v | RED |
| GND | BLACK |

The receiver sensor, was adapted from {% cite epitran --file 2021-01-29-mapping-ir-emitter-k005-receiver-ky-022-to-raspberry %} as
it has the wiring required but used with arduino.

![KY005 wiring with raspberry pi 3 b+](/images/posts/2021-01-29-mapping-ir-emitter-k005-receiver-ky-022-to-raspberry/ky005.jpg)

| Pi PIN | Transmitter PIN |
|--------|-----------------|
| 11 (GPIO 17) | YELLOW |
| 5v | RED |
| GND | BLACK |

The following section, will cover how to map the wiring presented in this
section and sending or receiving the signals, it will also dives in the
remote control database that the project lirc has for already mapped remotes.

## Mapping inputs to IR codes

Previous sections were focused onsetting up the hardware and the needed software
to make the ir sensors to work. This section focus on the configuration of lirc.
The configuration presented here is needed in order to send ir commands.

The first step is to find out which remote you would like to configure.
The `lirc` package provides the mapping between the IR codes and the remote
{% cite remotes --file 2021-01-29-mapping-ir-emitter-k005-receiver-ky-022-to-raspberry %}.
For me I ended up using the remote [AA59-00600A](https://sourceforge.net/p/lirc-remotes/code/ci/master/tree/remotes/samsung/AA59-00600A.lircd.conf){:target="_blank"}. The following command depicts how to download
a given remote configuration:

```shell
cd && \
wget https://sourceforge.net/p/lirc-remotes/code/ci/master/tree/remotes/samsung/AA59-00600A.lircd.conf && \
sudo mv AA59-00600A.lircd.conf /etc/lirc/lircd.conf.d/ && \
sudo /etc/init.d/lircd status
```

Once downloaded the `irsend` command is used to send IR commands to the television. For
the downloaded file above, the volume down IR command is as follows:

```
sudo irsend SEND_ONCE SAMSUNG_AA59-00600A KEY_VOLUMEDOWN
```

For each downloaded remote, I suggest to open the `.lircd.conf` file and check the
remote `name` and the available keys under the section `begin codes`.

## Miss leading configuration

A few tutorials related to the pi, will have an extra step reagarding configuring
the ir devices. The extra step says that it is required to update the file `modules`
under the directory `etc`. **For this post and the setup I am using this step is not require, there is no need
to add any entry in the file located at `/et/modules`.**

## References

{% bibliography --cited_in_order --file 2021-01-29-mapping-ir-emitter-k005-receiver-ky-022-to-raspberry %}