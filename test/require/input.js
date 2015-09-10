// Dependencies
var xorCrypt = require('xor-crypt')
var assert = require('assert')

// Construct the assertion parameters.
var input = 'Hello, World!'
var encrypted = xorCrypt(input)
var decrypted = xorCrypt(encrypted)

// Run an assertion.
assert.equal(input, decrypted)

// Return the encrypted version.
return encrypted
