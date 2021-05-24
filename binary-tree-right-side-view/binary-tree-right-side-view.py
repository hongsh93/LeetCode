# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: TreeNode) -> List[int]:
        if not root:
            return []
        res = []
        dfs = []
        def rightTraversal(p, d):
            if (len(dfs) < d):
                dfs.append([p.val])
            else:
                dfs[d-1].append(p.val)
            if p.right:
                rightTraversal(p.right, d+1)
            if p.left:
                rightTraversal(p.left, d+1)
        rightTraversal(root, 1)
        for i in dfs:
            res.append(i[0])
        return res