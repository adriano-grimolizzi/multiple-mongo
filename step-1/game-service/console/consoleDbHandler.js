const ConsoleModel = require("./ConsoleModel");

const findAllConsole = () => {
  return ConsoleModel.find({});
};

const saveConsole = (gameConsole) => {
  const gameConsole1 = new ConsoleModel(gameConsole);
  gameConsole1.save((err, gameConsole) => {
    if (err) {
      return console.error(err);
    }
    console.log(`${gameConsole.name} saved to DB`);
  });
};

module.exports = {
  findAllConsole,
  saveConsole,
};

// console.log(JSON.stringify(elements, null, 2));
