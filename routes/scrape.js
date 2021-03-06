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
        htmlString = await rp.get('https://news.sanook.com/lotto/check/01092562/')
    }
    catch (err) {
        console.log(err)
    }
    
    const $ = cheerio.load(htmlString)

    firstPrize.push($('#contentPrint > div.lottocheck__resize > div.lottocheck__sec.lottocheck__sec--bdnone > div.lottocheck__table > div:nth-child(1) > strong').text())
    lastTwoDigits.push($('#contentPrint > div.lottocheck__resize > div.lottocheck__sec.lottocheck__sec--bdnone > div.lottocheck__table > div:nth-child(4) > strong').text())
    $('#contentPrint > div.lottocheck__resize > div.lottocheck__sec.lottocheck__sec--bdnone > div.lottocheck__table > div:nth-child(2) > strong').each((i, elem) => {
        firstThreeDigits.push(($(elem).text()))
    })
    $('#contentPrint > div.lottocheck__resize > div.lottocheck__sec.lottocheck__sec--bdnone > div.lottocheck__table > div:nth-child(3) > strong').each((i, elem) => {
        lastThreeDigits.push(($(elem).text()))
    })

    await TextMessagesModel.updateOne({ ask: 'รางวัลที่ 1' }, { $set: { ans: firstPrize }, $currentDate: { lastModified: true } })
    await TextMessagesModel.updateOne({ ask: 'เลขท้าย 2 ตัว' }, { $set: { ans: lastTwoDigits }, $currentDate: { lastModified: true } })
    await TextMessagesModel.updateOne({ ask: 'เลขหน้า 3 ตัว' }, { $set: { ans: firstThreeDigits }, $currentDate: { lastModified: true } })
    await TextMessagesModel.updateOne({ ask: 'เลขท้าย 3 ตัว' }, { $set: { ans: lastThreeDigits }, $currentDate: { lastModified: true } })

    return res.json("UPDATE COMPLETE!")
})

module.exports = router