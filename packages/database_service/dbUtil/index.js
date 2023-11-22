const mongoose = require('mongoose')

mongoose.connection.once('open', ()=> {
    console.log('mongoDB connected!')
})

mongoose.connection.on('error', (err) => {
    console.error(err)
})

async function mongoConnect(config) {
    await mongoose.connect(config.mongoURI)
}

module.exports = mongoConnect