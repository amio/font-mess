module.exports = function genJSON (messed) {
  const { messedFontBuffer, messedText } = messed
  const fontBase64 = messedFontBuffer.toString('base64')

  return {
    messedText,
    fontBase64
  }
}
