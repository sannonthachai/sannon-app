const mongoose = require('mongoose')

const replySchema = mongoose.Schema({
    ask: String,
    ans: [String]

})

module.exports = mongoose.model('ReplyTextModel', replySchema)