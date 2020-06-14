var fs = require('fs');
var text = JSON.parse(fs.readFileSync('generator-corpus.json'));
var Markov = require('markov-strings').default;
var markov = new Markov(text.list)

var options = {
  maxTries: 50,
  prng: Math.random,
  filter: (res) => {
    return res.string.split(' ').length <= 5
  }
}

markov.buildCorpus();
var result = markov.generate(options);

console.log(result);

module.exports;
