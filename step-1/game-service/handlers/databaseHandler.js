const GameModel = require("../model/GameModel");

const printElements = (err, elements) => {
  console.log(JSON.stringify(elements, null, 2));
};

function printAllGames() {
  GameModel.find({}, printElements);
}

module.exports = {
  printAllGames,
};
