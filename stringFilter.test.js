const assert = require("assert");
const filter = require("./stringFilter");

assert.strictEqual(filter("ffdttttyy"), "ffdtttyy");
assert.strictEqual(filter("iiikigggg"), "iiikiggg");
//test with 5 of same character
assert.strictEqual(filter("iiikiggggg"), "iiikiggg");
