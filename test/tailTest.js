const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail: returns everything except the first item", () => {
  it("Inputting ['Hello', 'Lighthouse', 'Labs'] should return an array with length 2", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]).length;
    assert.strictEqual(result, 2);
  });

  it("Inputting ['Hello', 'Lighthouse', 'Labs'] should return ['Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ['Lighthouse', 'Labs']);
  });
});