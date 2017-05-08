# Node is ancestor of
Check if node is ancestor of descendant

## Install

* NPM
  ```bash
  npm install --save node-is-ancestor-of
  ```
* Yarn
  ```bash
  yarn add node-is-ancestor-of
  ```

## Usage

```javascript
const isAncestorOf = require('node-is-ancestor-of')

const el1 = document.getElementById('el1')
const el2 = document.getElementById('el2')
console.log(isAncestorOf(el1, el2))
// return true if el1 is ancestor of el2
// return false if el1 is not ancestor of el2
```

## License
MIT © [Roman Masyhar](https://github.com/rohmanhm)