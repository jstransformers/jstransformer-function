# jstransformer-function

[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-function/master.svg)](https://travis-ci.org/jstransformers/jstransformer-function)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-function/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-function?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-function/master.svg)](http://david-dm.org/jstransformers/jstransformer-function)
[![NPM version](https://img.shields.io/npm/v/jstransformer-function.svg)](https://www.npmjs.org/package/jstransformer-function)

## Installation

    npm install jstransformer-function

## API

```js
var func = require('jstransformer')(require('jstransformer-function'));

var input = 'return "Hello, " + this.name + "!"';
var locals = { name: 'World' };
func.render(input, locals).body;
//=> 'Hello, World'
```

## License

MIT
