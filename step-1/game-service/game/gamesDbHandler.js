const GameModel = require("./GameModel");

const findAllGames = () => {
  return GameModel.find({});
};

const saveGame = (game) => {
  const game1 = new GameModel(game);
  game1.save((err, game) => {
    if (err) {
      return console.error(err);
    }
    console.log(`${game.name} saved to DB`);
  });
};

module.exports = {
  findAllGames,
  saveGame,
};

// console.log(JSON.stringify(elements, null, 2));
