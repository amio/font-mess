# font-mess

[![gh-badge][gh-badge]][gh-link] [![npm-version][npm-badge]][npm-link]

Obscure text with messed font.

Inspect this [obscured quote][o-quote] from Jules Winnfield
to see [how it works][explain].

## Endpoints

- GET `/html/<text>`  
  HTML output for messed text.  
  _i.e. [/html/amio.cn@gmail.com](/html/amio.cn@gmail.com)_

- GET `/json/<text>`  
  JSON output for messed text.  
  _i.e. [/json/amio.cn@gmail.com](/json/amio.cn@gmail.com)_

_NOTE: Currently use "DroidSerif-Italic.ttf" by default._

## npm

To use font-mess programmatically,
```javascript
npm install font-mess
```

Check out https://github.com/amio/font-mess.

## License

MIT @ [Amio][author]

[screenshot]: https://user-images.githubusercontent.com/215282/28828751-52a0ac50-7697-11e7-861e-4d4ef1e75563.png
[npm-badge]:  https://flat.badgen.net/npm/v/font-mess
[npm-link]:   https://www.npmjs.com/package/font-mess
[gh-badge]:   https://flat.badgen.net/badge/github/amio%2Ffont-mess?icon&label
[gh-link]:    https://github.com/amio/font-mess
[author]:     https://github.com/amio
[explain]:    https://github.com/amio/font-mess/raw/master/explain-font-mess.png
[o-quote]:    https://mess.now.sh/html/Ezekiel%2025:17.%20The%20path%20of%20the%20righteous%20man%20is%20beset%20on%20all%20sides%20by%20the%20inequities%20of%20the%20selfish%20and%20the%20tyranny%20of%20evil%20men.%20Blessed%20is%20he%20who,%20in%20the%20name%20of%20charity%20and%20good%20will,%20shepherds%20the%20weak%20through%20the%20valley%20of%20the%20darkness,%20for%20he%20is%20truly%20his%20brother%E2%80%99s%20keeper%20and%20the%20finder%20of%20lost%20children.
