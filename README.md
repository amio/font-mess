# font-mess

Generate obscure text with messed font.

> Wow. This looks normal.  
> -- Friends with Benefits (2011)

How does it works? Inspect these examples.

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

[author]: https://github.com/amio
