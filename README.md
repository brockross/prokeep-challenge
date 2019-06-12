<img src="https://fec-brox.s3-us-west-2.amazonaws.com/images/brox-logo.png" title="brockross" alt="brockross-logo" style="width: 100px;">

# prokeep-challenge

> front-end coding challenge submission + full-stack version

## Table of Contents

- [Description](#description)
- [Installation](#installation)

---

## Description

> This repo contains two submissions:
>
> - a frontend-focused app, utilizing the provided mock api, to satisfy the requirements of the prompt. This can be found on the `master` branch.
> - the same app, built out full-stack with my own API and database implementation (node/express server to handle requests and check login credentials against user entries in a remote MongoDB cluster). This can be found on the `add-backend` branch. It is also deployed to an AWS EC2 instance here: http://ec2-35-166-202-182.us-west-2.compute.amazonaws.com:3000/

## Installation

- master:
  - run `npm install` for dependencies
  - run `npm build` to build app
  - run `npm start` to start server
  - use app at `localhost:3000`. Submitted login info will return a successful/unsuccessful message in accordance with the reqres.in API docs.
- add-backend (fullstack implementation)

  - deployed to AWS EC2 instance <a href="http://ec2-35-166-202-182.us-west-2.compute.amazonaws.com:3000/">here.</a>

  - Alternatively, install locally:
    - remote DB connection details are stored in a `.env` file which is git ignored--see email for details
    - run `npm install` for dependencies
    - run `npm build` to build app
    - run `npm start` to start server
    - use app at `localhost:3000`. Three users are stored in the DB, and supplying any of their credentials will return a successful login message accordingly.
