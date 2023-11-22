const axios = require('axios')

const mockMails = [
    {
        subject: 'My first Email',
        receiver: 'test@test.com',
        content: 'hello world'
    },
    {
        subject: 'My second Email',
        receiver: 'test@test.com',
        content: 'hello world'
    },
    {
        subject: 'My third Email',
        receiver: 'test@test.com',
        content: 'hello world'
    }
]

const getMails = async () => {
    const mails = (await axios.get('http://localhost:4001/mails')).data.payload
    console.log(mails)
    return mails
}

module.exports = {
    Query: {
        mails: () => getMails(),
        mail:(_, args) => mockMails[0],
    },
    Mutation: {
        mail: (_, args) => {
            mockMails[0] = args

            return args
        }
    }
}