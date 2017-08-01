# font-mess [![npm-version][npm-badge]][npm-link]

Generate obscure text with messed font.

> Wow. This looks normal.  
> -- Friends with Benefits (2011)

How does it works? Inspect this [obscured email address](example).

## Install

```
npm install font-mess
```

## Usage

### Programatic

```javascript
const fs = require('fs')
const mess = require('font-mess')

const messer = mess(fs.readFileSync('some-font.ttf'))
const messed = messer('some text')
// => {
//    originalText,
//    messMapping,
//    messedText,
//    messedFontBuffer
// }
```

### Endpoint

- https://mess.now.sh

## License

MIT @ [Amio](author)

[example]:    https://mess.now.sh/html/amio@gmail.com
[npm-badge]:  https://img.shields.io/npm/v/font-mess.svg?style=flat-square
[npm-link]:   https://www.npmjs.com/package/font-mess
[author]:     https://github.com/amio
