const generator = require('../alphabet-generator');

describe('generator tests', () => {

  it('should generate a string', () => {
    expect(generator()).toEqual(jasmine.any(String));
  });

  it('should generate a string at least 3 words long', () => {
    expect(generator().length).toBeGreaterThan(3);
  })
});
