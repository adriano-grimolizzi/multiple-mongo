const bodyParser = require("body-parser");
const express = require("express");

const game_controller = require("./handlers/restController");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 3000;

app.get("/", game_controller.get);

app.post("/", game_controller.post);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
