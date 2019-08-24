const request = require('request')

class RequestBody {

  constructor(replyToken) {
      this.data = []
      this.json = {
        "replyToken": this.replyToken = replyToken,
        "messages": this.data
      }
  }

  pushMessage(replyAns) {
    for(let i = 0; i < replyAns.length ; i++) {
      this.messages = {
        "type": "text",
        "text": replyAns[i]
      }
      this.data.push(this.messages)
    }
  }
}

class Messages {    
    constructor() {
      this.url = 'https://api.line.me/v2/bot/message/reply'
      this.headers = {
        "content-type": "application/json",
        "Authorization": "Bearer J4U6/4wBRF+q4Iwb5PwAKHKzm+auvDH/hpjI52b7NuNa127ZrzWJ4ELBHeCXzSyDA8S5Dvkduvj7rE7FnrQDTZyOXaro/+X4uct4kVgXDPCxheaKAsZR8EMNpvBoEUPRVMRkDAUjW1PPFIa4Gpmm6gdB04t89/1O/w1cDnyilFU="
      }
    }

    replyMessages(replyToken, replyAns) {
      let options = new RequestBody(replyToken)
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

let reply = new Messages()
reply.replyMessages("5555555555",["FUCK","123"])