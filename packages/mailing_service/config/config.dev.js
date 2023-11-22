const { Q_URI, MJ_API_PUBLIC, MJ_API_SECRET, FROM_EMAIL, FROM_NAME } = process.env

module.exports = {
    q: {
        uri: Q_URI
    },
    mailjet: {
        apiPublic: MJ_API_PUBLIC,
        apiSecret: MJ_API_SECRET,
        fromEmail: FROM_EMAIL,
        fromName: FROM_NAME
    }
}