const ReplyTextModel = require('../models/reply-line-apli-model')
const ReplyTextService = require('../services/reply-text-service')

module.exports = {
    replyMessages: async (req, res) => {

        req.body.events.forEach(async (element) => {
            replyToken = element.replyToken
            textMessage = element.message.text
        })

        let reply = await ReplyTextModel.findOne({ ask: textMessage })

        if (reply !== null) {
            let message = new ReplyTextService(replyToken, reply.ans)
            message.replyText()
        }
        else {
            let message = new ReplyTextService(replyToken, "What are you looking for?")
            message.replyText()
        }
    }
}