const request = require('request')

class ReplyTextMessages {

  constructor(replyToken, textMessage) {
      this.url = 'https://api.line.me/v2/bot/message/reply'
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

  replyText() {
    request.post({
      headers: this.headers,
      url: this.url,
      json: this.json
    }, (error, res) => {
      if (res.statusCode !== 200) {
        throw new Error('Invalid format by status code ' + res.statusCode)
      }
    })
  }
}

module.exports = ReplyTextMessages