const request = require('request')
const RequestBodyService = require('../services/request-body-service')

class Messages {

  constructor() {
    this.url = 'https://api.line.me/v2/bot/message/reply'
    this.headers = {
      "content-type": "application/json",
      "Authorization": "Bearer J4U6/4wBRF+q4Iwb5PwAKHKzm+auvDH/hpjI52b7NuNa127ZrzWJ4ELBHeCXzSyDA8S5Dvkduvj7rE7FnrQDTZyOXaro/+X4uct4kVgXDPCxheaKAsZR8EMNpvBoEUPRVMRkDAUjW1PPFIa4Gpmm6gdB04t89/1O/w1cDnyilFU="
    }
  }

  replyMessages(replyToken, replyAns) {
    let options = new RequestBodyService(replyToken)
    options.pushMessage(replyAns)

    request.post({
      headers: this.headers,
      url: this.url,
      json: options.json
    }, (error, res) => {
      if(res.statusCode !== 200) {
        console.log("Error with code " + res.statusCode)
      }
    })
  }
}

module.exports = Messages