const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

const typeDefs = `
    type Query {
        mails: [Mail]
        mail(subject: String!, reciever: String!): Mail
    }

    type Mutation {
        mail(subject: String!, reciever: String!, content: String!): Mail
    }

    type Mail {
        subject: String
        reciever: String
        content: String
        _id: String
    }
`

module.exports = makeExecutableSchema( { typeDefs, resolvers })