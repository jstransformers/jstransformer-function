'use strict'

var extend = require('extend-shallow')

exports.name = 'function'
exports.outputFormat = 'html'

exports.compile = function (str) {
  // Create the function in compile() so that it can be cached.
  // eslint-disable-next-line no-new-func
  var func = new Function('require', str)

  // Construct a new function, manipulating "this" for local variable support.
  return function (locals, options) {
    // Construct the "this" object for the function.
    var that = extend({}, options, locals)

    // Build the global function arguments.
    var args = [
      // Provide the "require" statement so that modules can be loaded.
      require
    ]

    // Use .apply() so that "this" holds all the local variables.
    return func.apply(that, args)
  }
}

exports.compileClient = function (str) {
  return 'function (locals) {' +
    'return function () {' + str + '}.call(locals)' +
  '}'
}
