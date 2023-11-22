require('dotenv').config()
const { PORT, MONGO_URI } = process.env

module.exports = {
    port: PORT || 4000,
    mongoURI: MONGO_URI
}