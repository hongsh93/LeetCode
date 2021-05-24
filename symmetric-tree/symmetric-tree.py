# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        if not root:
            return True
        def symmetric(p,q):
            if not p and not q:
                return True
            elif not p or not q or p.val != q.val:
                return False
            return symmetric(p.left, q.right) and symmetric(p.right, q.left)
        return symmetric(root.left, root.right)