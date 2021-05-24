# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        res = []
        def traversal(p, d):
            if len(res) < d:
                res.insert(0, [])
            res[-d].append(p.val)
            if p.left:
                traversal(p.left, d+1)
            if p.right:
                traversal(p.right, d+1)
        traversal(root, 1)
        return res
                