const amqp = require('amqplib/callback_api')
const { q: { uri } } = require('../config')

const q = 'test_q'
let channel

amqp.connect(uri, (err, conn) => {
    if (err) throw new Error(err)

    conn.createChannel((err, ch) => {
        if (err) throw new Error(err)

        ch.assertQueue(q, { durable: true })

        channel = ch
    })
})

const pushToMessageQ = msg => {
    // 若連線還沒有處理完，則延遲推送訊息
    if (!channel) setTimeout(pushToMessageQ(msg), 1000)

    channel.sendToQueue(q, Buffer.from(msg))

    return { m: 'done' }
}

module.exports = {
    pushToMessageQ
}