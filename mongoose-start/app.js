const { connect, connection, model, Schema } = require('mongoose')

connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })

const db = connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('Connected to mongo'))

const dogSchema = new Schema({
    name: String,
    height: Number
})

const Dog = model('Dog', dogSchema)

const fido = new Dog({ name: "Fido", height: 1.45 })

// fido.save((err) => {
//     if (err) {
//         return console.error(err)
//     }
//     console.log("Saved Fido into mongo")
// })

const printElements = (_, elements) =>
    console.log(JSON.stringify(elements, null, 2))

Dog.find({}, printElements)