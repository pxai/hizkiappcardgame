const scrabble = {
  "eu" , {
      'A', 1, 'B', 3, 'D', 2, 'E', 1, 'F', 8, 'G', 2, 'H', 4, 'I', 1, 'J', 5,
      'K', 1, 'L', 2, 'M', 3, 'N', 1, 'Ñ', 10, 'O', 1, 'P', 3, 'R', 1, 'S', 2,
      'T', 1, 'U', 1, 'V', 8, 'W', 10, 'X', 5, 'Y', 10, 'Z', 2
  }
};

const letters = Object.keys(scrabble.eu);
const totalPoints = letters.reduce((total, letter) => total + scrabble.eu[letter], 0);
const averagePoints = totalPoints / letters.length;

const cardWeights = {};
letters.forEach((letter) => {
cardWeights[letter] = averagePoints / scrabble.eu[letter]; /
});

const totalCards = 100;

const cardsPerLetter = {};
letters.forEach((letter) => {
cardsPerLetter[letter] = Math.round(cardWeights[letter] * totalCards);
});

const currentTotal = Object.values(cardsPerLetter).reduce((total, count) => total + count, 0);
const adjustment = totalCards - currentTotal;


console.log(cardsPerLetter);
console.log('Total Cards,', currentTotal);

