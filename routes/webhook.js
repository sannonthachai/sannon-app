const express = require('express');
const router = express.Router();
const request = require('request')
const optionsClass = require('../config/request-option')
const middleware = require('../middleware/signature-middleware')
const ReplyTextModel = require('../models/reply-line-apli-model')

/* GET users listing. */
router.post('/webhook', middleware.compareSignature, (req, res) => {
  // res.status(200).json({ message: "Success!" });
  console.log(req.body.events[0].message)
  req.body.events.forEach(async (element) => {
    // console.log(JSON.stringify(element.replyToken))
    let reply = await ReplyTextModel.findOne({ ask: element.message.text })
    if (reply !== null) {
      let options = new optionsClass(element.replyToken, reply.ans)
      request(options, (error, res) => {
        if (!error && res.statusCode == 200) {
          console.log("Success")
        }
      })
    }
    else {
      let options = new optionsClass(element.replyToken, "Have a nice day")
      request(options, (error, res) => {
        if (!error && res.statusCode == 200) {
          console.log("Success")
        }
      })
    }
  })
})

module.exports = router
