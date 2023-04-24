---
sidebar_position: 2
---

# Instalación
Para instalar JMeter, debes cumplir con los requisitos mínimos.

## Requisitos mínimos
* Java 8 o superior.

Después de completar los requisitos, JMeter recomienda descargar la
[última versión](http://jmeter.apache.org/download_jmeter.cgi).

Dado que JMeter es un proyecto 100% Java, este es un programa multiplataforma;
solo debes descargar el zip de la última versión y descomprimirlo. Luego,
debes ejecutar los siguientes comandos.

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

# Instalación con Docker

Si prefieres ejecutar JMeter en un contenedor, utiliza [justb4/jmeter](https://hub.docker.com/r/justb4/jmeter).

* Docker con X11
```bash
docker run --rm -it \
    -v /tmp/.X11-unix:/tmp/.X11-unix \
    -e "DISPLAY=${DISPLAY:-:0.0}" \
    --network=host justb4/jmeter
```
