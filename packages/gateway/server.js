const express = require('express')
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4')
const { makeExecutableSchema } = require('graphql-tools')

const { port } = require('./config')

const typeDefs = `
    type Query { hey: String! }
`

const resolvers = {
    Query: {
        hey: () => 'hey there'
    }
}

async function startApolloServer() {
    const app = express();

    const schema = makeExecutableSchema({
        typeDefs,
        resolvers
    })

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