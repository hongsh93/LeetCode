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
var minDepth = function(root) {
    let res = 0 
    if (!root) {
        return 0
    }
    
    const bfs = function(nodes) {
        let stack = []
        res++
        for (let node of nodes) {
            if (node) {
                if (node.left) {
                    stack.push(node.left)
                }
                if (node.right) {
                    stack.push(node.right)
                }
                if (!node.left && !node.right) {
                    return res
                }
            }
        }
        bfs(stack)
    }
    
    bfs([root])
    return res
};