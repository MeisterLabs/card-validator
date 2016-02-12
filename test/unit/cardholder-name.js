var expect = require('chai').expect;
var postalCode = require('../../src/cardholder-name');

describe('postalCode', function () {
  var describes = {
    'returns false for non-string types': [
      [0, {isValid: false}],
      [1, {isValid: false}],
      [-1,{isValid: false}],
      [null, {isValid: false}],
      [[], {isValid: false}],
      [{}, {isValid: false}]
    ],

    'accepts strings of any length': [
      ['Herbert', {isValid: true}],
      ['Michael Knight', {isValid: true}],
      ['  Garth    !!!  ', {isValid: true}],

    ],

    'returns false on empty strings': [
      ['', {isValid: false}],
      [' ', {isValid: false}],
    ]
  };

  Object.keys(describes).forEach(function (key) {
    var tests = describes[key];
    describe(key, function () {
      tests.forEach(function (test) {
        var arg = test[0];
        var output = test[1];

        it('returns ' + JSON.stringify(output) + ' for "' + arg + '"', function () {
          expect(postalCode(arg)).to.deep.equal(output);
        })
      });
    });
  });

});
