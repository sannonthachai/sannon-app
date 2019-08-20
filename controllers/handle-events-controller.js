const TextMessagesModel = require('../models/text-messages-model')
const TextMessagesService = require('../services/reply-text-service')

module.exports = {
    replyMessages: async (req, res) => {

        req.body.events.forEach(async (element) => {
            replyToken = element.replyToken
            textMessage = element.message.text
        })

        let reply = await TextMessagesModel.findOne({ ask: textMessage })

        if (reply !== null) {
            let message = new TextMessagesService(replyToken, reply.ans)
            message.replyText()
        }
        else {
            let message = new TextMessagesService(replyToken, "What are you looking for?")
            message.replyText()
        }
    }
}