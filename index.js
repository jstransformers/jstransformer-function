'use strict'

var extend = require('extend-shallow')

exports.name = 'function'
exports.outputFormat = 'html'

exports.compile = function (str, options) {
  // Create the function in compile() so that it can be cached.
  var func = new Function(str)

  // Construct a new function, manipulating "this" for local variable support.
  return function (locals) {
    // Construct the "this" object for the function.
    var that = extend({}, options, locals)

    // Use .apply() so that "this" holds all the local variables.
    return func.apply(that)
  }
}
