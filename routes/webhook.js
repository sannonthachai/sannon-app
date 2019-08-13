const express = require('express');
const router = express.Router();
const crypto = require('crypto')
const request = require('request')
const optionsClass = require('../config/request-option')

/* GET users listing. */
router.post('/webhook', (req, res, next) => {
  
  const channelSecret = "e8d9ca27da8f627c7712f9fb11a4a1ca"
  const body = JSON.stringify(req.body)
  const signature = crypto.createHmac('SHA256', channelSecret).update(body).digest('base64')

  if (req.headers["x-line-signature"] !== signature) {

    return res.status(500)
  }

  // res.status(200).json({ message: "Success!" });
  // console.log(req.headers["x-line-signature"])
  console.log(req.body.events[0].message)

  req.body.events.forEach(element => {

    // console.log(JSON.stringify(element.replyToken))
    let options = new optionsClass(element.replyToken)

    request(options, (error, res, next) => {
      if (!error && res.statusCode == 200) {
        // console.log("success")
        return next
      }
    })
  })

  // console.log(req.body.events[0].type)
});

module.exports = router;



