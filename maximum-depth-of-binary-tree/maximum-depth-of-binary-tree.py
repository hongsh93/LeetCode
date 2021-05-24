# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if not root:
            return 0
        def depth(p, d):
            if not p.left and not p.right:
                return d
            elif not p.left:
                return depth(p.right, d+1)
            elif not p.right:
                return depth(p.left, d+1)
            else:
                return max(depth(p.right, d+1), depth(p.left, d+1))
        return depth(root, 1)