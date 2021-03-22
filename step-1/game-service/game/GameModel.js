const { mongoose, connection1 } = require("database-client");

const gameSchema = new mongoose.Schema({ name: String });

const GameModel = connection1.model("Game", gameSchema);

module.exports = GameModel;
