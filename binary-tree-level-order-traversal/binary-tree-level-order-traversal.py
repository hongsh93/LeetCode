# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        
        res = []
        def order(p, d):
            if (len(res) < d):
                res.append([p.val])
            else:
                res[d-1].append(p.val)
                
            if p.left:
                order(p.left, d+1)
            if p.right:
                order(p.right, d+1)
        order(root, 1)
        return res