/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const rootToLeaf = function(node, rtlStr, res) {
        if (node.val) {
            rtlStr += `${node.val}->`
        }
        if (node.left) {
            rootToLeaf(node.left, rtlStr, res)
        }
        if (node.right) {
            rootToLeaf(node.right, rtlStr, res)
        }
        if (!node.left && !node.right) {
            res.push(rtlStr.slice(0, -2))
        }
        return res
    }
    return rootToLeaf(root, "", [])
};