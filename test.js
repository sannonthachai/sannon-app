class RequestForm {

  constructor(replyToken) {
      this.url = 'https://api.line.me/v2/bot/message/reply'
      this.headers = {
        "content-type": "application/json",
        "Authorization": "Bearer J4U6/4wBRF+q4Iwb5PwAKHKzm+auvDH/hpjI52b7NuNa127ZrzWJ4ELBHeCXzSyDA8S5Dvkduvj7rE7FnrQDTZyOXaro/+X4uct4kVgXDPCxheaKAsZR8EMNpvBoEUPRVMRkDAUjW1PPFIa4Gpmm6gdB04t89/1O/w1cDnyilFU="
      }
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

class ReplyAnswer {    
    constructor(replyToken) {
        this.options = new RequestForm(replyToken)
    }

    replyText(replyAns) {
        this.options.pushMessage(replyAns)
        console.log(this.options.json)
    }
}

let reply = new ReplyAnswer("5555555555")
reply.replyText(["FUCK","123"])