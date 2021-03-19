const databaseClient = require("database-client");

const gameSchema = new databaseClient.mongoose.Schema({ name: String });

const GameModel = databaseClient.connection1.model("Game", gameSchema);

module.exports = GameModel;
