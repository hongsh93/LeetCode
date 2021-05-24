class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        minPath = [[0]*n for i in range(m)]
        
        minPath[0][0] = grid[0][0]
        for j in range(1, n):
            minPath[0][j] = minPath[0][j-1] + grid[0][j]
        for i in range(1, m):
            minPath[i][0] = minPath[i-1][0] + grid[i][0]
        
        for i in range(1, m):
            for j in range(1, n):
                minPath[i][j] = min(minPath[i-1][j], minPath[i][j-1])+grid[i][j]
                
        return minPath[m-1][n-1]