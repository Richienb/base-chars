# Base chars [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/base-chars/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/base-chars)

Characters for use in numerical bases.

[![NPM Badge](https://nodei.co/npm/base-chars.png)](https://npmjs.com/package/base-chars)

## Install

```sh
npm install base-chars
```

## Usage

```js
const baseChars = require("base-chars");

baseChars[10];
//=> '0123456789'

baseChars[16]
//=> '0123456789abcdef'
```

## API

### baseChars

Type: `object`

The characters for use in numerical bases.
