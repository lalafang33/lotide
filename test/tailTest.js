const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');

// const result = tail(["Hello", "Lighthouse", "Labs"]);
//   assertEqual(result, ["Lighthouse", "Labs"]);

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(assertEqual(tail(["Hello", "Lighthouse", "Labs"], ['Lighthouse', 'Labs'])));
  });

});