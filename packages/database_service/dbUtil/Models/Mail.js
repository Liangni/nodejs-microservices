const mongoose = require('mongoose')

const mailSchema = new mongoose.Schema({
    subject: {
        type: String,
    },
    receiver: {
        type: String,
    },
    content: {
        type: String
    }
})

module.exports = mongoose.model('Mail', mailSchema)