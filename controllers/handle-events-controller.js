// Import Models ======================================================================
const ReplyTextModel = require('../models/reply-line-apli-model')

// Import Services ====================================================================
const ReplyTextService = require('../services/line-reply-api-service')

module.exports = {
    replyMessages: async (req, res) => {
        req.body.events.forEach(async (element) => {
            replyToken = element.replyToken
            textMessage = element.message.text
        })
        let reply = await ReplyTextModel.findOne({ ask: textMessage })
        if (reply !== null) {
            let message = new ReplyTextService()
            message.replyText(replyToken, reply.ans)
        }
        else {
            let message = new ReplyTextService()
            message.replyText(replyToken, "What are you looking for?")
        }
    }
}