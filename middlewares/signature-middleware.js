const crypto = require('crypto')

module.exports = {
    compareSignature: async (req, res, next) => {

        const channelSecret = "e8d9ca27da8f627c7712f9fb11a4a1ca"
        const body = JSON.stringify(req.body)
        const signature = crypto.createHmac('SHA256', channelSecret).update(body).digest('base64')

        if(req.headers["x-line-signature"] !== signature) {
            return res.status(500)
        }
        else {
            res.status(200)
            return next()
        }
    }
}