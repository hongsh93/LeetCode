class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        seen = defaultdict(int)
        ans = 0
        def dfs(i,j):
            if seen[(i,j)] != 0:
                return
            if grid[i][j] == "1":
                seen[(i,j)] = 1
                if i+1 < len(grid):
                    dfs(i+1,j)
                if j+1 < len(grid[i]):
                    dfs(i,j+1)
                if i-1 >= 0:
                    dfs(i-1, j)
                if j-1 >= 0:
                    dfs(i, j-1)
            else:
                seen[(i,j)] = 1
        
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if seen[(i,j)] == 0:
                    if (grid[i][j] == "1"):
                        ans += 1
                        dfs(i,j)
                    else:
                        seen[(i,j)] = 1
        return ans