const express = require('express')

const config = require('./config')
const { port } = config

const app = express();

app.use(express.json())

require('./dbUtil')(config)
require('./routes/get')(app)
require('./routes/post')(app)

app.listen(port, () => console.log(`Listening on port ${port}`));
