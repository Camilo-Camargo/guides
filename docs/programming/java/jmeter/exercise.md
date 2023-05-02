# Load Testing Exercise

Load testing is a type of performance testing that involves simulating a 
high volume of user traffic to measure how well an application can handle 
the load. In this case, we used JMeter, a popular load testing tool, to test the performance of a Spring Boot application.

## Description of the test

The test was designed to simulate the behavior of 1 million users registering,
logging in, and sending messages within the application. By simulating this
high volume of traffic, we were able to assess how the application performs 
under stress and identify any performance bottlenecks or scalability issues.

## Prerequisites Steps
Before running the load test with JMeter, you need to complete the following prerequisite steps:

1. Clone repository
```bash
git clone https://github.com/Camilo-Camargo/springusers
```
2. Navigate to root directory project
```bash
cd springusers
```
3. Install dependencies and build Front-End
Because the project uses React, you need to install its dependencies and 
build the front-end.
```bash
cd web
    npm install
    npm run build
cd ..
```
4. Create database docker container
```bash
docker run --rm --name springusers -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_DATABASE=SpringUsers -e MYSQL_USER=camilocamargo -e MYSQL_PASSWORD=1234 -p 3306:3306 -d mysql
```
5. run development spring boot server
```
cd api
    ./gradlew bootRun
cd ..
```
6. Start JMeter

You should run JMeter from docker see Installation guide.  

## JMeter steps

This section is in progress...
