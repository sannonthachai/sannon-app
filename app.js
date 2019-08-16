const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongo = require('mongodb').MongoClient
const mongoose = require('mongoose')
const app = express();

// Connect Database ================================================================
const db = require('./config/keys-database')
mongo.connect(db.mongoURI, db.mongo)
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.log(err))
// mongoose.connect(db.mongoURI,db.set)
//         .then(() => console.log('MongoDB Connected'))
//         .catch(err => console.log(err))

// Set up our express application ==================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

// Set Router ======================================================================
const webhook = require('./routes/webhook');
app.use('/sannon-app/line/api', webhook);

// Connect Port ====================================================================
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log('Server started on port ' + PORT))

module.exports = app;
