class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        
        d = {}
        def numPath(i,j):
            if (i == len(obstacleGrid)-1 and j == len(obstacleGrid[0])-1):
                return 1-obstacleGrid[i][j]
            
            if (i,j) in d:
                return d[(i,j)]
            else:
                ans = 0
                if j < len(obstacleGrid[0])-1 and obstacleGrid[i][j+1] == 0 :
                    ans += numPath(i, j+1)
                if i < len(obstacleGrid)-1 and obstacleGrid[i+1][j] == 0:
                    ans += numPath(i+1, j)

                d[(i,j)] = ans
                return ans
        if obstacleGrid[0][0] == 0:
            return numPath(0,0)
        else:
            return 0