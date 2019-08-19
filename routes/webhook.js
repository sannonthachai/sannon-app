const express = require('express');
const router = express.Router();
const middleware = require('../middlewares/signature-middleware')
const controller = require('../controllers/handle-events-controller')

/* WEBHOOK */
router.post('/webhook', middleware.compareSignature, controller.replyMessages)

module.exports = router
