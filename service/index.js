const fs = require('fs')
const path = require('path')
const serveMarked = require('serve-marked')
const { unescape } = require('querystring')

const mess = require('../lib/mess.js')
const genHTML = require('./gen-html.js')
const genJSON = require('./gen-json.js')

const defaultFont = 'fonts/DroidSerif-Italic.ttf'
const defaultFontBuffer = fs.readFileSync(path.join(__dirname, defaultFont))
const messer = mess(defaultFontBuffer)

const serveReadme = serveMarked(path.resolve(__dirname, 'README.md'), {
  title: 'font-mess',
  inlineCSS: `
    .markdown-body h1 + p {
      text-align: center;
      margin: -40px 0 4rem 0;
      line-height: 20px;
      height: 20px;
    }
  `
})

const serve = async (req, res) => {
  if (req.url === '/') {
    return serveReadme(req, res)
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
        res.setHeader('Content-Type', 'application/json')
        return res.end(JSON.stringify(genJSON(messed)))
    }
  }

  res.statusCode = 404
  res.end()
}

module.exports = serve
