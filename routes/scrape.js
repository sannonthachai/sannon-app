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

    let updateFirstPrize = await TextMessagesModel.updateOne({ ask: 'เลขหน้า 3 ตัว' }, { $set: { ans: firstThreeDigits }, $currentDate: { lastModified: true } })
    let updateLastTwoDigits = await TextMessagesModel.updateOne({ ask: 'เลขท้าย 2 ตัว' }, { $set: { ans: lastTwoDigits }, $currentDate: { lastModified: true } })
    let updateFirstThreeDigits = await TextMessagesModel.updateOne({ ask: 'เลขหน้า 3 ตัว' }, { $set: { ans: firstThreeDigits }, $currentDate: { lastModified: true } })
    let updateLastThreeDigits = await TextMessagesModel.updateOne({ ask: 'เลขท้าย 3 ตัว' }, { $set: { ans: lastThreeDigits }, $currentDate: { lastModified: true } })

    return res.json("UPDATE COMPLETE!")
})

module.exports = router