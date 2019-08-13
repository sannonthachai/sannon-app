class options {

    constructor(replyToken) {
        this.uri = 'https://api.line.me/v2/bot/message/reply'
        this.method = 'POST'
        this.headers = {
          "content-type": "application/json",
          "Authorization": "Bearer J4U6/4wBRF+q4Iwb5PwAKHKzm+auvDH/hpjI52b7NuNa127ZrzWJ4ELBHeCXzSyDA8S5Dvkduvj7rE7FnrQDTZyOXaro/+X4uct4kVgXDPCxheaKAsZR8EMNpvBoEUPRVMRkDAUjW1PPFIa4Gpmm6gdB04t89/1O/w1cDnyilFU="
        }
        this.json = {
          "replyToken": this.replyToken = replyToken,
          "messages":[
              {
                  "type":"text",
                  "text":"Hello, user"
              }
          ]
        }
    }
}

module.exports = options