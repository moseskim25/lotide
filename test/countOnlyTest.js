const assert = require("chai").assert;
const countOnly = require("../countOnly");

describe("#countOnly", () => {
  it("Jason appears once in the array", () => {
    const result = countOnly([
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ],
    { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }
    )["Jason"];

    assert.equal(result, 1);
  })

  it("Karima is not in the array. Returns undefined", () => {
    const result = countOnly([
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ],
    { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }
    )["Karima"];

    assert.equal(result, undefined);
  })
})