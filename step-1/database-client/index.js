const mongoose = require("mongoose");
const config = require('config');

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const instance1 = config.get('mongo1');

const instance2 = config.get('mongo2');

// It's possible to use multiple connections using 'mongoose.createConnection()'
const connection1 = mongoose.createConnection(
  `mongodb://${instance1.host}:${instance1.port}/${instance1.dbName}`,
  options
);

const connection2 = mongoose.createConnection(
  `mongodb://${instance2.host}:${instance2.port}/${instance2.dbName}`,
  options
);

module.exports.connection1 = connection1;
module.exports.connection2 = connection2;
module.exports.mongoose = mongoose;
