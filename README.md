# Servie Redirect

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Greenkeeper badge](https://badges.greenkeeper.io/blakeembrey/node-servie-redirect.svg)](https://greenkeeper.io/)

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

[npm-image]: https://img.shields.io/npm/v/servie-redirect.svg?style=flat
[npm-url]: https://npmjs.org/package/servie-redirect
[downloads-image]: https://img.shields.io/npm/dm/servie-redirect.svg?style=flat
[downloads-url]: https://npmjs.org/package/servie-redirect
[travis-image]: https://img.shields.io/travis/blakeembrey/node-servie-redirect.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/node-servie-redirect
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/node-servie-redirect.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/node-servie-redirect?branch=master
