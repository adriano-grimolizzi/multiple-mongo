const { Schema, createConnection } = require("mongoose")

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

// It's possible to use multiple connections using 'mongoose.createConnection()'.
// It returns a new connection.
const conn_1 = createConnection("mongodb://localhost:27017/database1", options);
const conn_2 = createConnection("mongodb://localhost:27018/database1", options);

const gameSchema = new Schema({ name: String })
const consoleSchema = new Schema({ name: String })

// Models are always scoped to a single connection
const GameModel1 = conn_1.model("Game", gameSchema)
const GameModel2 = conn_2.model("Game", gameSchema)

// const ConsoleModel = conn_2.model("Console", consoleSchema)

const printElements = (_, elements) =>
  console.log(JSON.stringify(elements, null, 2))

GameModel1.find({}, printElements)
GameModel2.find({}, printElements)
// ConsoleModel.find({}, printElements)
