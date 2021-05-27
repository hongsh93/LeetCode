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
 * @return {number}
 */
var goodNodes = function(root) {
    let ans = 0
    let max = -10000
    ans = goodNode(root, max)
    return ans
};

var goodNode = function (node, max) {
    let res = 0
    let new_max = max
    if (node.val && node.val >= new_max) {
        res += 1
        new_max = node.val
    }
    if (node.left) {
        res += goodNode(node.left, new_max)
    }
    if (node.right) {
        res += goodNode(node.right, new_max)
    }
    return res
}