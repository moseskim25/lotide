const assert = require('chai').assert;
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  it ("Returns 'drama' as the genre for the show 'The Wire'", () => {
    const result = findKeyByValue({ 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    }, "The Wire");

    assert.equal(result, 'drama');
  })
})