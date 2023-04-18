---
sidebar_position: 2
---

# Installation
To install JMeter you must meets the minimum requirements.

## Minimum Requirements
* Java 8 or higher.

After completed the requirements JMeter recommends download the
[latest release](http://jmeter.apache.org/download_jmeter.cgi).

Because JMeter is 100% Java project, this is a multiplatform program
you only download the zip of the latest release and then unzip, after this
you should run the following commands.

* Windows
```bash
cd apache-jmeter-5.5/bin
./jmeter.bat
```
* Unix
```bash
cd apache-jmeter-5.5/bin
./jmeter
```


# Docker Installation

If you prefer run JMeter behind a container use [justb4/jmeter](https://hub.docker.com/r/justb4/jmeter).

* Docker with X11
```bash
docker run --rm -it \
    -v /tmp/.X11-unix:/tmp/.X11-unix \
    -e "DISPLAY=${DISPLAY:-:0.0}" \
    --network=host justb4/jmeter
```

