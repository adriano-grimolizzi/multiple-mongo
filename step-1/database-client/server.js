const config = require('config');
const instance1 = config.get('mongo1');
console.log(JSON.stringify(instance1, null, 2))

console.log(`mongodb://${instance1.host}:${instance1.port}/${instance1.dbName}`)