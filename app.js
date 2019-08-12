const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const users = require('./routes/users');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

// Connect Port ====================================================================
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log('Server started on port ' + PORT + '\n' + 'At part /sannon-app/line/api'))

app.use('/sannon-app/line/api', users);

module.exports = app;
