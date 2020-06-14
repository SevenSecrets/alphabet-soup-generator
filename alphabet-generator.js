const fs = require('fs');
const corpus = JSON.parse(fs.readFileSync('generator-corpus.json'));
const MarkovGenerator = require('markov-strings').default;
const markov = new MarkovGenerator(corpus.list, { stateSize: 1 })

var options = {
  maxTries: 50,
  prng: Math.random,
  filter: (res) => {
    return res.string.split(' ').length <= 5
  }
}

var generator = () => {
  markov.buildCorpus();
  var result = markov.generate(options);
  while (result.refs.length < 2) {
    console.log("retrying");
    var result = markov.generate(options);
  }
  console.log(result);
  return result.string
}

module.exports = generator;
