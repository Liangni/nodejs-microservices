const mockMails = [
    {
        subject: 'My first Email',
        reciever: 'test@test.com',
        content: 'hello world'
    },
    {
        subject: 'My second Email',
        reciever: 'test@test.com',
        content: 'hello world'
    },
    {
        subject: 'My third Email',
        reciever: 'test@test.com',
        content: 'hello world'
    }
]

module.exports = {
    Query: {
        mails: () => mockMails,
        mail:(_, args) => mockMails[0],
    },
    Mutation: {
        mail: (_, args) => {
            mockMails[0] = args

            return args
        }
    }
}