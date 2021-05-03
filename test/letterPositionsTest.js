const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("Returns [0, 15, 19, 23] - the positions of letter 'a' in 'a sentene with a space and letter'", () => {
    const result = letterPositions('a sentene with a space and letter')['a'];
    assert.deepEqual(result, [0, 15, 19, 23]);
  })
})