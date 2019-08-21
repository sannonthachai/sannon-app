const cheerio = require('cheerio')
const rp = require('request-promise')

rp.get('https://news.sanook.com/lotto/').then((htmlString) => {

  const $ = cheerio.load(htmlString)

  let firstPrize = []
  firstPrize.push($('#lotto-highlight-result > span:nth-child(1) > strong').text())
  console.log(firstPrize)

  let lastTwoDigits = []
  lastTwoDigits.push($('#lotto-highlight-result > span:nth-child(4) > strong').text())
  console.log(lastTwoDigits)

  let firstThreeDigits = []
  $('#lotto-highlight-result > span:nth-child(2) > b').each((i, elem) => {
    firstThreeDigits.push(($(elem).text()))
  })
  console.log(firstThreeDigits)

  let lastThreeDigits = []
  $('#lotto-highlight-result > span:nth-child(3) > b').each((i, elem) => {
    lastThreeDigits.push(($(elem).text()))
  })
  console.log(lastThreeDigits)

}).catch(err => {
    console.log(err)
})