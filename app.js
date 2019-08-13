const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

// Set Router ======================================================================
const webhook = require('./routes/webhook');
app.use('/sannon-app/line/api', webhook);

// Connect Port ====================================================================
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log('Server started on port ' + PORT + '\n' + 'At part /sannon-app/line/api'))

module.exports = app;
