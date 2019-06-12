<img src="https://fec-brox.s3-us-west-2.amazonaws.com/images/brox-logo.png" title="brockross" alt="brockross-logo" style="width: 100px">

# prokeep-challenge

> front-end coding challenge submission + full-stack version

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)

---

## Description

> This repo contains two submissions:
>
> - a frontend-focused app, utilizing the provided mock api, to satisfy the requirements of the prompt. This can be found on the `master` branch.
> - the same app, built out full-stack with my own API and database implementation (node/express server to handle requests and check login credentials against user entries in a remote MongoDB cluster). See Usage section below for more details. This can be found on the `add-backend` branch.

## Installation

- master:
  - run `npm install` for dependencies
  - run `npm build` to build app
  - run `npm start` to start server
  - use app at `localhost:3000`
- add-backend (fullstack implementation)
  - remote DB connection details are stored in a `.env` file which is git ignored--see email for details
  - run `npm install` for dependencies
  - run `npm build` to build app
  - run `npm start` to start server
  - use app at `localhost:3000`. Three users are stored in the DB with password info, and will return a successful login message accordingly.
