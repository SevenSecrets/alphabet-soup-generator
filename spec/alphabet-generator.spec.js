var generator = require('../alphabet-generator');

describe('generator tests', () => {
  it('can be run', () => {
    expect(generator.generate()).toBeDefined();
  });
});
