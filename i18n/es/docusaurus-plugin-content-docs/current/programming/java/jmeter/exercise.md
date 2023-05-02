# Ejercicio de Pruebas de Carga

Las pruebas de carga son un tipo de pruebas de rendimiento que implican 
simular un alto volumen de tráfico de usuarios para medir qué tan bien 
una aplicación puede manejar la carga. En este caso, utilizamos JMeter, 
una popular herramienta de pruebas de carga, para probar el rendimiento 
de una aplicación Spring Boot.

## Descripción de la prueba

La prueba fue diseñada para simular el comportamiento de 1 millón de usuarios 
registrándose, iniciando sesión y enviando mensajes dentro de la aplicación. 
Al simular este alto volumen de tráfico, pudimos evaluar cómo se desempeña 
la aplicación bajo estrés e identificar cuellos de botella de rendimiento 
o problemas de escalabilidad.

## Pasos previos
Antes de ejecutar la prueba de carga con JMeter, debes completar los 
siguientes pasos previos:

1. Clonar repositorio
```bash
git clone https://github.com/Camilo-Camargo/springusers
```
2. Navegar al directorio raíz del proyecto
```bash
cd springusers
```
3. Instalar dependencias y construir el Front-End
Debido a que el proyecto utiliza React, debes instalar sus dependencias 
y construir el front-end.
```bash
cd web
    npm install
    npm run build
cd ..
```
4. Crear contenedor Docker para la base de datos
```bash
docker run --rm --name springusers -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_DATABASE=SpringUsers -e MYSQL_USER=camilocamargo -e MYSQL_PASSWORD=1234 -p 3306:3306 -d mysql
```
5. Ejecutar el servidor de Spring Boot en modo desarrollo
```
cd api
    ./gradlew bootRun
cd ..
```
6. Iniciar JMeter

Debes ejecutar JMeter desde Docker. Consulta la guía de instalación.

## Pasos de JMeter

Esta sección está en progreso...
