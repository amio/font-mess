const opentype = require('opentype.js')
const shuffle = require('array-shuffle')
const toArrayBuffer = require('to-arraybuffer')

const notdefGlyph = new opentype.Glyph({
  name: '.notdef',
  unicode: 0,
  advanceWidth: 650,
  path: new opentype.Path()
})

module.exports = function (fontBuffer) {
  if (!Buffer.isBuffer(fontBuffer)) {
    throw new Error('"fontBuffer" is not a Buffer.')
  }

  const sourceFont = opentype.parse(toArrayBuffer(fontBuffer))

  return function (originalText) {
    const chars = []
    const whitespaces = []  // Don't mess with whitespaces.
    Array.from(new Set(originalText)).forEach(c => {
      /\s/.test(c) ? whitespaces.push(c) : chars.push(c)
    })

    const messMapping = {}
    const messedChars = shuffle(chars)
    const messedGlyphs = chars.map((x, i) => {
      messMapping[x] = messedChars[i] // generate messMapping incidentally

      const glyph = sourceFont.charToGlyph(x)
      glyph.index = i
      glyph.unicode = messedChars[i].charCodeAt(0)
      glyph.unicodes = [glyph.unicode] // would break lingature
      glyph.name = messedChars[i]
      return glyph
    })

    // Politly concat whitespaces.
    messedGlyphs.concat(whitespaces.map(c => sourceFont.charToGlyph(c)))

    // ".notdef" is required.
    messedGlyphs.unshift(notdefGlyph)

    const messedFont = new opentype.Font({
      familyName: 'MessedFont',
      styleName: 'medium',
      unitsPerEm: sourceFont.unitsPerEm,
      ascender: sourceFont.ascender,
      descender: sourceFont.descender,
      glyphs: messedGlyphs
    })
    const messedFontBuffer = Buffer.from(messedFont.toArrayBuffer())

    const messedText = originalText.replace(/./g, char => messMapping[char] || char)

    return {
      originalText,
      messMapping,
      messedText,
      messedFontBuffer
    }
  }
}
