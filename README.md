# Servie Redirect

[![NPM version](https://img.shields.io/npm/v/servie-redirect.svg?style=flat)](https://npmjs.org/package/servie-redirect)
[![NPM downloads](https://img.shields.io/npm/dm/servie-redirect.svg?style=flat)](https://npmjs.org/package/servie-redirect)
[![Build status](https://img.shields.io/travis/serviejs/servie-redirect.svg?style=flat)](https://travis-ci.org/serviejs/servie-redirect)
[![Test coverage](https://img.shields.io/coveralls/serviejs/servie-redirect.svg?style=flat)](https://coveralls.io/r/serviejs/servie-redirect?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/serviejs/servie-redirect.svg)](https://greenkeeper.io/)

> Redirects for Servie - a thin layer for creating a `Response` object.

## Installation

```
npm install servie-redirect --save
```

## Usage

```ts
import { redirect } from 'servie-redirect'
import { compose } from 'throwback'
import { get } from 'servie-route'

const app = compose(
  redirect(),
  get('/foo', ...)
)
```

## TypeScript

This project is written using [TypeScript](https://github.com/Microsoft/TypeScript) and publishes the definitions directly to NPM.

## License

Apache 2.0
