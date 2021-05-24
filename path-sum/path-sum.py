# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: TreeNode, sum: int) -> bool:
        if not root:
            return False
        def pathSum(p, sum):
            if not p.left and not p.right:
                return sum==p.val
            elif not p.left:
                return pathSum(p.right, sum-p.val)
            elif not p.right:
                return pathSum(p.left, sum-p.val)
            else:
                return pathSum(p.left, sum-p.val) or pathSum(p.right, sum-p.val)
        return pathSum(root, sum)