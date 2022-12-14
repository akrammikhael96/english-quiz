const express = require("express");

const bodyParser = require("body-parser");

// reads testData.json as Object
const jsonData = require("../testData.json");

const PORT = process.env.PORT || 8080;

const app = express();

const jsonParser = bodyParser.json();

/**
 * Gets 10 random words.
 * @param {Object[]} wordsArr The array of words objects.
 * @return {Object[]} Array of random 10 word objects.
 */
function getRandomWords(wordsArr) {
  let isAdjective = false;
  let isNoun = false;
  let isVerb = false;
  let isAdverb = false;
  let shuffledWords = wordsArr;

  while (!isAdjective && !isNoun && !isVerb && !isAdverb) {
    shuffledWords = wordsArr.sort(() => Math.random() - 0.5).slice(0, 10);
    isAdjective = shuffledWords.some((e) => e.pos === "adjective");
    isNoun = shuffledWords.some((e) => e.pos === "noun");
    isVerb = shuffledWords.some((e) => e.pos === "verb");
    isAdverb = shuffledWords.some((e) => e.pos === "adverb");
  }

  return shuffledWords;
}

/**
 * Gets the rank.
 * @param {Number} score The score number.
 * @return {Number} the score percentages regarding previous scores.
 */
function calculateRank(score) {
  let allScores = jsonData["scoresList"];
  let belowScoreEntries = allScores.filter((e) => e < score).length;
  return Number.isInteger((belowScoreEntries / allScores.length) * 100)
    ? (belowScoreEntries / allScores.length) * 100
    : Number(((belowScoreEntries / allScores.length) * 100).toFixed(2));
}

// words endpoint
app.get("/words", (req, res) => {
  res.send({ words: getRandomWords(jsonData.wordList) });
});

// rank endpoint
app.post("/rank", jsonParser, (req, res) => {
  const userScore = req.body.score;
  res.send({ rank: calculateRank(userScore) });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
