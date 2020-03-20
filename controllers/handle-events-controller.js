const TextMessagesModel = require('../models/text-messages-model')
const MessagesService = require('../services/reply-messages-service')

module.exports = {
    replyMessages: async (req, res) => {

        req.body.events.forEach(async (element) => {
            console.log(element.source)
            replyToken = element.replyToken
            textMessage = element.message.text
        })

        let reply = await TextMessagesModel.findOne({ ask: textMessage })

        if(reply !== null) {
            let message = new MessagesService()
            message.replyMessages(replyToken, reply.ans)
        }
        else {
            let ans = ["What are you looking for ?"]
            let message = new MessagesService()
            message.replyMessages(replyToken, ans)
        }
    }
}