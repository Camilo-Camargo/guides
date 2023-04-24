---
sidebar_position: 3
---

# Fundamentos
Esta sección describe los conceptos fundamentales de JMeter.

## Test Plan
Una colección de pasos.

## Thread Group
El número de hilos que JMeter utiliza para ejecutar pruebas, los cuales son independientes 
entre sí.

Propiedades del grupo de hilos:
* Number of Threads: Número de usuarios
* Ramp-up Period: El tiempo para iniciar todos los hilos
* Loop Count: Número de veces que se repite el grupo de hilos

Un Thread Group tiene controladores:
* Samplers: Envían solicitudes al servidor
* Logic Controllers: Determinan cuándo enviar solicitudes
* Test Fragments

### Samplers
Los Samplers son solicitudes enviadas al servidor. Cuando hay configuraciones similares para muestras, 
puedes utilizar la configuración de Samplers por defecto.

### Logic Controllers
Los Logic Controllers controlan los Samplers, dictando cuándo enviar una solicitud o cambiar el orden 
de los Samplers.

## Listeners
Los Listeners muestran estadísticas de tu plan de pruebas.

## Timers
Los Timers imitan el retraso del usuario introduciendo tiempo de espera y también se pueden utilizar 
para evitar sobrecargar tu servidor.

## Assertions
Las Assertions definen las expectativas para los resultados.

## Config Elements
Los Config Elements pueden agregar o modificar solicitudes.

## Pre-Processor Elements
Los Pre-Processor Elements se ejecutan antes de un Sampler.

## Post-Processor Elements
Los Post-Processor Elements se ejecutan después de un Sampler.

## Execution Order
En JMeter, cada elemento tiene una prioridad:
1. Config Elements
2. Pre-Processors
3. Timers
4. Samplers
5. Post-Processors
6. Assertions
7. Listeners

## Scoping Rules
Ciertos elementos son jerárquicos, como Listeners, Config Elements, Post-Processors, Pre-Processors, 
Assertions y Timers. Esto significa que si el padre es una solicitud, afecta a esa solicitud. Si el 
padre es un controlador, el elemento se aplica a todas las solicitudes de ese controlador. Si el padre 
de otro controlador tiene ese elemento, se aplica a todas las solicitudes de ese controlador.


