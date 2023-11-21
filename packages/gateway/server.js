const express = require('express')
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4')
const schema = require('./data/schema')

const { port } = require('./config')


async function startApolloServer() {
    const app = express();

    const server = new ApolloServer({ schema });

    await server.start();

    app.use(express.json());

    app.use('/gq', expressMiddleware(server))

    app.get('/', (_, res) => {
        res.send('I am working as expected');
    });

    app.listen(port, () => console.log(`Listening on port ${port}`));
}

startApolloServer();