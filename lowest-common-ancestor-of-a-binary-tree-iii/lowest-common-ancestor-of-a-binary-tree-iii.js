/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function(p, q) {
    let node = p
    let arr = []
    while (node !== null) {
        arr.push(node)
        node = node.parent
    }
    node = q
    while(arr.indexOf(node) === -1) {
        node = node.parent
    }
    return node
};