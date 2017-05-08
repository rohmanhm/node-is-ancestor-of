const isAncestorOf = require('../index.js')

describe('Node Is Ancestor of', () => {
  const html = `
    <div id="el1">
      <div id="el2"></div>
    </div>
  `
  const doc = document.createElement('div')
  doc.innerHTML = html
  const el1 = doc.querySelector('#el1')
  const el2 = doc.querySelector('#el2')

  it('should return false if node is not ancestor of descendant', () => {
    const actual = isAncestorOf(el2, el1)
    expect(actual).toBeFalsy()
  })

  it('should return true if node is not ancestor of descendant', () => {
    const actual = isAncestorOf(el1, el2)
    expect(actual).toBeTruthy()
  })
})