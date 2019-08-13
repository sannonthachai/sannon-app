const express = require('express');
const router = express.Router();
const request = require('request')
const optionsClass = require('../config/request-option')
const middleware = require('../middleware/signature-middleware')

/* GET users listing. */
router.post('/webhook', middleware.compareSignature, (req, res) => {
  // res.status(200).json({ message: "Success!" });
  console.log(req.body.events[0].message)

  req.body.events.forEach(element => {
    // console.log(JSON.stringify(element.replyToken))
    let options = new optionsClass(element.replyToken)

    request(options, (error, res) => {
      if (!error && res.statusCode == 200) {
        console.log("success")
      }
    })
  })
  // console.log(req.body.events[0].type)
});

module.exports = router;



