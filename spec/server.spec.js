const app = require('../server');
const request = require('request');

describe("server requests", () => {
  it("should return a 200", (done) => {
    request.get('http://localhost:3000/', (err, res) => {
      expect(res.statusCode).toEqual(200);
      done();
    });
  });
});
