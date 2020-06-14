const generator = require('../alphabet-generator');

describe('generator tests', () => {
  it('generates a string', () => {
    expect(generator()).toEqual(jasmine.any(String));
  });
});
