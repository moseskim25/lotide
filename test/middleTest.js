const middle = require('../middle');
const assert = require("chai").assert;


describe("#middleTest", () => {
  it("Returns [2, 3] when given [1, 2, 3, 4]", () => {
    const result = middle([1, 2, 3, 4]);
    assert.deepEqual(result, [2, 3]);
  })
})