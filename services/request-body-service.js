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

module.exports = RequestBody