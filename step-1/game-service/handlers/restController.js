const databaseHandler = require("./databaseHandler");

exports.get = async (req, res) => {
  const games = await databaseHandler.findAllGames();
  res.send(games);
};

exports.post = async (req, res) => {
    databaseHandler.saveGame(req.body);
    res.send(`Game ${req.body.name} has been saved.`)
}