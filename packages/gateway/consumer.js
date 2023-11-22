require('dotenv').config()
const amqp = require('amqplib/callback_api')
const { DOTENV_AMQP_URL } = process.env

const q = 'test_q'

amqp.connect(DOTENV_AMQP_URL, (err, conn) => {
    if (err) throw new Error(err)

    conn.createChannel((err, ch) => {
        if (err) throw new Error(err)

        ch.assertQueue(q, { durable: true })
        ch.consume(
            q,
            msg => {
            console.log('I GOT A MESSAGE', msg.content.toString())
            },
            { noAck: true } // 告訴 server 處理完的 message 就可以刪掉了
        )

    })
})