const databaseHandler = require("./consoleDbHandler");

exports.get = async (req, res) => {
  console.log("CONSOLE CONTROLLER: GET");
  const games = await databaseHandler.findAllConsole();
  res.send(games);
};

exports.post = async (req, res) => {
  console.log("CONSOLE CONTROLLER: POST");
  await databaseHandler.saveConsole(req.body);
  res.send(`Console ${req.body.name} has been saved.`);
};
