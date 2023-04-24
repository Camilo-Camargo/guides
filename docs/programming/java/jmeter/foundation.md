---
sidebar_position: 3
---

# Foundation
This section describes the core concepts of JMeter.

## Test Plan
A collection of steps.

## Thread Group
The number of threads JMeter uses to execute tests, which are independent 
of each other.

Thread Group properties:
* Number of Threads: Number of users
* Ramp-up Period: The time period to start all the threads
* Loop Count: Number of times to repeat the thread group

A Thread Group has controllers:
* Samplers: Send requests to the server
* Logic Controllers: Determine when to send requests
* Test Fragments

### Samplers
Samplers are requests sent to the server. When there are similar 
configurations for samples, you can use the Default Sampler configuration.

### Logic Controllers
Logic Controllers control the Samplers, dictating when to send a request or 
change the order of the samplers.

## Listeners
Listeners display statistics of your test plan.

## Timers
Timers mimic user delay by introducing waiting time and can also be used to
prevent overwhelming your server.

## Assertions
Assertions define expectations for the results.

## Config Elements
Config Elements can add or modify requests.

## Pre-Processor Elements
Pre-Processor Elements run before a Sampler.

## Post-Processor Elements
Post-Processor Elements run after a Sampler.

## Execution Order
In JMeter, each element has a priority:
1. Configuration Elements
2. Pre-Processors
3. Timers
4. Samplers
5. Post-Processors
6. Assertions
7. Listeners

## Scoping Rules
Certain elements are hierarchical, such as Listeners, Config Elements, 
Post-Processors, Pre-Processors, Assertions, and Timers. This means that if 
the parent is a request, it affects that request. If the parent is a 
controller, the element is applied to all requests in that controller. 
If the parent of another controller has that element, it is applied to 
all requests in that controller.

