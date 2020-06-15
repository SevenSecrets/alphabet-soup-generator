const fs = require('fs');
const corpus = JSON.parse(fs.readFileSync('generator-corpus.json'));
const MarkovGenerator = require('markov-strings').default;
const markov = new MarkovGenerator(corpus.list, { stateSize: 1 })

var options = {
  maxTries: 50,
  prng: Math.random,
  filter: (res) => {
    return (res.string.split(' ').length <= 5) && (res.string.split(' ').length >= 3)
  }
}

var generator = () => {
  markov.buildCorpus();
  var result = markov.generate(options);
  var isRepeat = corpus.list.includes(result.string);
  while (result.refs.length < 2 && isRepeat) {
    console.log("retrying");
    var result = markov.generate(options);
  }
  // console.log(result);  enable this for monitoring the quality of results
  return result.string
}

module.exports = generator;
