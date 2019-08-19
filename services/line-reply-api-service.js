const request = require('request')

class RequestAPIOptions {

  constructor(replyToken, textMessage) {
      this.uri = 'https://api.line.me/v2/bot/message/reply'
      this.method = 'POST'
      this.headers = {
        "content-type": "application/json",
        "Authorization": "Bearer J4U6/4wBRF+q4Iwb5PwAKHKzm+auvDH/hpjI52b7NuNa127ZrzWJ4ELBHeCXzSyDA8S5Dvkduvj7rE7FnrQDTZyOXaro/+X4uct4kVgXDPCxheaKAsZR8EMNpvBoEUPRVMRkDAUjW1PPFIa4Gpmm6gdB04t89/1O/w1cDnyilFU="
      }
      this.json = {
        "replyToken": this.replyToken = replyToken,
        "messages": [
            {
                "type": "text",
                "text": this.textMessage = textMessage
            }
        ]
      }
  }
}

class ReplyTextMessages {

  constructor() {
  }

  replyText(replyToken, textMessage) {
    let options = new RequestAPIOptions(replyToken, textMessage)
    request(options, (error, response, body) => {
      console.log(body)
    })
  }
}

module.exports = ReplyTextMessages