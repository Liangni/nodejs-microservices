require('dotenv').config()
const amqp = require('amqplib/callback_api')
const { DOTENV_AMQP_URL } = process.env

const q = 'test_q'
let channel

amqp.connect(DOTENV_AMQP_URL, (err, conn) => {
    if (err) throw new Error(err)

    conn.createChannel((err, ch) => {
        if (err) throw new Error(err)

        ch.assertQueue(q, { durable: true })

        ch.sendToQueue(q, Buffer.from('Hello RabbitMQ Again'))
    })
})