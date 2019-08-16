const mongoose = require('mongoose')

const replySchema = mongoose.Schema({
    ask: {
        type: String
    },
    ans: {
        type: String
    }
})

module.exports = mongoose.model('ReplyModel', replySchema)