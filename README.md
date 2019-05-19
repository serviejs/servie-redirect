# Servie Redirect

[![NPM version](https://img.shields.io/npm/v/servie-redirect.svg?style=flat)](https://npmjs.org/package/servie-redirect)
[![NPM downloads](https://img.shields.io/npm/dm/servie-redirect.svg?style=flat)](https://npmjs.org/package/servie-redirect)
[![Build status](https://img.shields.io/travis/serviejs/servie-redirect.svg?style=flat)](https://travis-ci.org/serviejs/servie-redirect)
[![Test coverage](https://img.shields.io/coveralls/serviejs/servie-redirect.svg?style=flat)](https://coveralls.io/r/serviejs/servie-redirect?branch=master)

> Simple URL redirection for Servie - thin layer for creating a `Response` with body and status code.

## Installation

```
npm install servie-redirect --save
```

## Usage

```ts
import { redirect } from "servie-redirect";

function handle(req) {
  return redirect(req, "/goto");
}
```

## TypeScript

This project is written using [TypeScript](https://github.com/Microsoft/TypeScript) and publishes the definitions directly to NPM.

## License

Apache 2.0
