module.exports = function genJSON (messed) {
  const { messedFont, messedText } = messed
  const fontBuffer = Buffer.from(messedFont.toArrayBuffer())
  const fontBase64 = fontBuffer.toString('base64')

  return {
    messedText,
    fontBase64
  }
}
