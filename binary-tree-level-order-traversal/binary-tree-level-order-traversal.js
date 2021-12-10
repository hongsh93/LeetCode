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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = []
    if (!root) {
        return res
    }
    res.push([root.val])
    let nextNodes = []
    if (root.left) {
        nextNodes.push(root.left)
    }
    if (root.right) {
        nextNodes.push(root.right)
    }
    
    while (nextNodes.length > 0) {
        let nodeStack = []
        let sameLevel = []
        for (let node of nextNodes) {
            sameLevel.push(node.val)
            if (node.left) {
                nodeStack.push(node.left)
            }
            if (node.right) {
                nodeStack.push(node.right)
            }
        }
        nextNodes = nodeStack
        res.push(sameLevel)
    }
    return res
};