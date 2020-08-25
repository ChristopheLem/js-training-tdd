"use strict";

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
const cutFirst = (str) => str.substring(0, 2);
const cutLast = (str) => str.substring(str.length - 2);
const cutFirstLast = (str) => str.substring(2, str.length - 2);
//* Begin of tests
const assert = require("assert");

assert.strictEqual(typeof cutFirst, "function");
assert.deepStrictEqual(cutFirst("bbbonjour"), "bb");
assert.deepStrictEqual(cutLast("bonjourrr"), "rr");
assert.deepStrictEqual(cutFirstLast("bbbonjourrr"), "bonjour");
// End of tests */
