const Mail  = require('../dbUtil/Models/Mail')

const mailHandler = async ({ body: { subject, receiver, content } }, res) => {
    let mail
    let error
    
    if (!subject || !receiver || !content) {
        res.sendStatus(400).send({
            message: 'You forgot some import key',
            service: 'Database Service',
            status: 400,
            payload: null
        })
    }
    try {
        mail = await Mail.create({
            subject,
            receiver,
            content
        })
    } catch (err) {
        error = err
    }

    res.send({
        message: 'Got response from DB',
        service: 'Database Service',
        status: 200,
        payload: mail || error
    })
    
}

module.exports = server => {
    server.post('/mails', mailHandler)
}