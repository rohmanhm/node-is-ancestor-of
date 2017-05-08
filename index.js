/**
 * Check if node if node is ancestor of descendant
 * 
 * @param {node} ancestor 
 * @param {node} descendant 
 * @returns 
 */
function isOrIsAncestorOf(ancestor, descendant) {
  var n = descendant;
  while (n) {
    if (n === ancestor) {
      return true;
    } else {
      n = n.parentNode;
    }
  }
  return false;
}

exports = {
  // support for babel or typescript
  default: isOrIsAncestorOf
};

module.exports = isOrIsAncestorOf;