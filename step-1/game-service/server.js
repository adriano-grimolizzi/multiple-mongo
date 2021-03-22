const bodyParser = require("body-parser");
const express = require("express");

const game_controller = require("./game/gamesController");
const console_controller = require("./console/consoleController");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 3000;

app.get("/games", game_controller.get);

app.post("/games", game_controller.post);

app.get("/consoles", console_controller.get);

app.post("/consoles", console_controller.post);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
