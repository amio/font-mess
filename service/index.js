const fs = require('fs')
const path = require('path')
const axios = require('axios')
const { unescape } = require('querystring')

const mess = require('../lib/mess.js')
const genHTML = require('./gen-html.js')
const genJSON = require('./gen-json.js')

const defaultFont = 'fonts/DroidSerif-Italic.ttf'
const defaultFontBuffer = fs.readFileSync(path.join(__dirname, defaultFont))
const messer = mess(defaultFontBuffer)

const serve = async (req, res) => {
  if (req.url === '/favicon.ico') {
    return res.end()
  }

  if (req.url === '/') {
    return res.end(await IndexHTML)
  }

  const params = req.url.match(/^\/(\w+)\/(.+)$/)

  if (params) {
    const [route, text] = params.splice(1)
    const messed = messer(unescape(text))
    switch (route) {
      case 'html':
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        return res.end(genHTML(messed))
      case 'json':
        return res.end(genJSON(messed))
    }
  }

  res.statusCode = 404
  res.end()
}

const README = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf-8')
const IndexHTML = axios.post('https://md.now.sh/', {
  text: README,
  title: 'font-mess | Obscure text with messed font.',
  linkCSS: 'https://markdowncss.github.io/splendor/css/splendor.css',
  inlineCSS: 'code { background: #EEE; border-radius: 3px }'
}).then(res => res.data, e => (console.log(e) || README))

module.exports = serve
