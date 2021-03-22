const { mongoose, connection2 } = require("database-client");

const consoleSchema = new mongoose.Schema({ name: String });

const ConsoleModel = connection2.model("Console", consoleSchema);

module.exports = ConsoleModel;
