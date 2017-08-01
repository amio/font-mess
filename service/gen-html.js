const shuffle = require('array-shuffle')
const genJSON = require('./gen-json.js')

module.exports = function genHTML (messed) {
  const { fontBase64, messedText } = genJSON(messed)

  const messTime = shuffle(new Date().getTime().toString().split('')).join('')
  const fontName = 'MF' + messTime

  const css = `
    .${fontName} {
      font-family: ${fontName};
    }
    @font-face {
      font-family:"${fontName}";
      src:url(data:font/opentype;base64,${fontBase64});
      font-weight:normal;
      font-style:normal;
    }
  `

  return `
    <style>${css}</style>
    <div class="font-mess ${fontName}">${messedText}</div>
  `
}
