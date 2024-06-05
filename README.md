Reservation service with CURD operations developed as a microservice using tools below 

NestJS - as the backend framework
TypeORM - as the Object-Relational Mapper (ORM)
MongoDB - as the database
Postman - for Testing
TypeScript - as the programming language


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Creating a Reservation:
We begin by testing the POST request to create a reservation. We provide a JSON request body with properties such as the startDate, endDate, placeId, and invoiceId.*

<img width="570" alt="Screenshot 2024-06-05 at 4 01 00 PM" src="https://github.com/balichowdry/reservation/assets/3157273/bbe34e89-f27a-4a17-a3b2-6afd0609966e">

## Fetching All Reservations:
Next, we test the GET request to retrieve all reservations using the "find all" route. The response includes an array of reservations
<img width="553" alt="Screenshot 2024-06-05 at 4 04 54 PM" src="https://github.com/balichowdry/reservation/assets/3157273/5261ede6-733b-49d1-8274-8917c2316b95">

## Finding a Single Reservation:
To retrieve a specific reservation, we use the GET request, and we provide the ID as part of the route. We extract the ID using the params decorator. The response contains the single reservation corresponding to the provided ID.

<img width="547" alt="Screenshot 2024-06-05 at 4 05 09 PM" src="https://github.com/balichowdry/reservation/assets/3157273/17d2e2d5-66af-4e09-bdc5-3c34746b03dc">


## Stay in touch

- Author - [Bilal Sattar](https://github.com/balichowdry/)

