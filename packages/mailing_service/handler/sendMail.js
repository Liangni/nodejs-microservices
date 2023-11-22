const { mailjet: { apiPublic, apiSecret, fromEmail, fromName } } = require('../config')
const Mailjet = require('node-mailjet').apiConnect(apiPublic, apiSecret)

module.exports = async mail => {
    const request = await Mailjet.post('send').request({
        FromEmail: fromEmail,
        FromName: fromName,
        Subject: mail.subject,
        'Text-part': mail.content,
        Recipients: [
            {
                Email: mail.receiver
            }
        ]
    })

    console.log(request.body)
}