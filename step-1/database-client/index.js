const mongoose = require("mongoose");

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

// It's possible to use multiple connections using 'mongoose.createConnection()'
const connection1 = mongoose.createConnection(
  "mongodb://localhost/database1",
  options
);

const connection2 = mongoose.createConnection(
  "mongodb://localhost/database2",
  options
);

module.exports.connection1 = connection1;
module.exports.connection2 = connection2;
module.exports.mongoose = mongoose;
