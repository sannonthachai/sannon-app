const cheerio = require('cheerio')
const rp = require('request-promise')

rp.get('https://news.sanook.com/lotto/').then((htmlString) => {
  // Load the web page source code into a cheerio instance
  const $ = cheerio.load(htmlString)

  $('#lotto-highlight-result > span > strong').each((i, elem) => {
    let lotto = $(elem).text()
    console.log(lotto)
  })

  $('#lotto-highlight-result > span > b').each((i, elem) => {
    console.log($(elem).text())
  })
}).catch(err => {
    console.log(err)
})