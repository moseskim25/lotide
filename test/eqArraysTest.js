const eqArrays = require("../eqArrays");
const assert = require("chai").assert;

describe("#eqArrays", () => {
  it("Returns true when you input two identical arrays [1, 2, 3] and [1, 2, 3]", () => {
    const result = eqArrays([1, 2, 3], [1, 2, 3], true);

    assert.strictEqual(result, true);
  });
});
