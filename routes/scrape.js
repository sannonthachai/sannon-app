const express = require('express');
const router = express.Router();
const cheerio = require('cheerio')
const rp = require('request-promise')
const TextMessagesModel = require('../models/text-messages-model')

router.get('/update', async (req,res) => {

    const firstPrize = []
    const lastTwoDigits = []
    const firstThreeDigits = []
    const lastThreeDigits = []

    try {
        htmlString = await rp.get('https://news.sanook.com/lotto/')
    }
    catch (err) {
        console.log(err)
    }
    
    const $ = cheerio.load(htmlString)

    firstPrize.push($('#lotto-highlight-result > span:nth-child(1) > strong').text())
    lastTwoDigits.push($('#lotto-highlight-result > span:nth-child(4) > strong').text())
    $('#lotto-highlight-result > span:nth-child(2) > b').each((i, elem) => {
        firstThreeDigits.push(($(elem).text()))
    })
    $('#lotto-highlight-result > span:nth-child(3) > b').each((i, elem) => {
        lastThreeDigits.push(($(elem).text()))
    })

    return res.json(firstThreeDigits)
})

module.exports = router