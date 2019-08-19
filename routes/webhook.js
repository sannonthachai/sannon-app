const express = require('express');
const router = express.Router();
// Import Middlewares =======================================================
const middleware = require('../middlewares/signature-middleware')
// Import Controllers =======================================================
const controller = require('../controllers/handle-events-controller')

/* WEBHOOK */
router.post('/webhook', middleware.compareSignature, controller.replyMessages)

module.exports = router
