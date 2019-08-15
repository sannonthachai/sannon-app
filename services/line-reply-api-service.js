const request = require('request')

class LineReplyAPI {
  constructor() {
    this.url = "https://api.line.me/v2/bot/message/reply"
    this.headers = { "content-type": "application/json", "Authorization": "Bearer J4U6/4wBRF+q4Iwb5PwAKHKzm+auvDH/hpjI52b7NuNa127ZrzWJ4ELBHeCXzSyDA8S5Dvkduvj7rE7FnrQDTZyOXaro/+X4uct4kVgXDPCxheaKAsZR8EMNpvBoEUPRVMRkDAUjW1PPFIa4Gpmm6gdB04t89/1O/w1cDnyilFU=" }
  }

  postTextReply (replyToken, json) {
    let body = { "replyToken": replyToken, "messages": [json] }
    return request.post({ url: this.url, headers: this.headers, body: body}, (error, res) => {
      if (!error && res.statusCode == 200) {
        console.log("Success")
      }
    })
  }

  // postQuickReply = async (body, token) => {
  //   return request.post(url)
  //     .on('error', function(err) {
  //       console.error(err)
  //     })
  // }
}

module.exports = LineReplyAPI