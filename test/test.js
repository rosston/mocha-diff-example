'use strict';

var chai = require('chai');
var expect = chai.expect;

it('should show a string diff', function() {
  var expected = 'foo';
  var actual = 'foo bar';
  expect(actual).to.equal(expected);
});

it('should show an array diff', function() {
  var expected = [
    'foo',
    'bar'
  ];
  var actual = [
    'bar',
    'baz'
  ];
  expect(actual).to.deep.equal(expected);
});

it('should show an object diff', function() {
  var expected = {
    foo: 42,
    bar: 1764,
    baz: {
      qux: 'bleep',
      norf: 'bloop'
    }
  };
  var actual = {
    bar: 1764,
    baz: {
      norf: 'bloop'
    },
    random: true
  };
  expect(actual).to.deep.equal(expected);
});
