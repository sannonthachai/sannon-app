const express = require('express');
const router = express.Router();
const crypto = require('crypto')
const request = require('request')

/* GET users listing. */
router.post('/webhook', (req, res, next) => {
  
  const channelSecret = "e8d9ca27da8f627c7712f9fb11a4a1ca"
  const body = JSON.stringify(req.body)
  const signature = crypto.createHmac('SHA256', channelSecret).update(body).digest('base64')

  if (req.headers["x-line-signature"] !== signature) {
    console.log(signature)
    
    return res.status(500)
  }

  res.status(200).json({ message: "Success!" });
  // console.log(req.headers["x-line-signature"])
  console.log(req.body.events[0].message)

  req.body.events.forEach(element => {

    // console.log(JSON.stringify(element.replyToken))
  
    const options = {
      uri: 'https://api.line.me/v2/bot/message/reply',
      method: 'POST',
      headers: {
        "content-type": "application/json",
        "Authorization": "Bearer J4U6/4wBRF+q4Iwb5PwAKHKzm+auvDH/hpjI52b7NuNa127ZrzWJ4ELBHeCXzSyDA8S5Dvkduvj7rE7FnrQDTZyOXaro/+X4uct4kVgXDPCxheaKAsZR8EMNpvBoEUPRVMRkDAUjW1PPFIa4Gpmm6gdB04t89/1O/w1cDnyilFU="
      },
      json: {
        "replyToken": element.replyToken,
        "messages":[
            {
                "type":"text",
                "text":"Hello, user"
            }
        ]
    }
    }

    // console.log(options)

    request(options, (error, response) => {
      if (!error && response.statusCode == 200) {
        console.log("success")
      }
    })

  })

  // console.log(req.body.events[0].type)

});



module.exports = router;



