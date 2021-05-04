const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


describe("#eqObjects", () => {
  it("Returns true when you enter two identical objects nested { a: { z: 1 }, b: 2 } abnd { a: { z: 1 }, b: 2 }", () => {
    const result = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });

    assert.strictEqual(result, true);
  })

  it("Returns false when you enter two different objects { a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    const result = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });

    assert.strictEqual(result, false);
  })
})