const express = require('express');
const router = express.Router();
const request = require('request')
const optionsClass = require('../config/request-option')
const middleware = require('../middleware/signature-middleware')

/* GET users listing. */
router.post('/webhook', middleware.compareSignature, (req, res) => {
  // res.status(200).json({ message: "Success!" });
  // console.log(req.body.events[0].message.text)
  req.body.events.forEach(element => {
    // console.log(JSON.stringify(element.replyToken))
    if (element.message.text == "Hello") {
      let options = new optionsClass(element.replyToken, "Hi Guys")
      
      request(options)
    }
    else {
      let options = new optionsClass(element.replyToken, "Hello, user")

      request(options, (error, res) => {
        if (!error && res.statusCode == 200) {
          console.log(element.message)
        }
      })
    }
  })
})

module.exports = router
