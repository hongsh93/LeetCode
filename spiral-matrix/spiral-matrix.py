class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        row_start = 0
        column_start = 0
        k = min(len(matrix), len(matrix[0]))
        ans = []
        for i in range(k//2):
            for j in range(i, len(matrix[0])-i):
                ans.append(matrix[i][j])
            for l in range(i+1, len(matrix)-i):
                ans.append(matrix[l][len(matrix[0])-1-i])
            for j in range(i+1, len(matrix[0])-i):
                ans.append(matrix[len(matrix)-1-i][len(matrix[0])-1-j])
            for l in range(i+1, len(matrix)-i-1):
                ans.append(matrix[len(matrix)-1-l][i])
                
        if (k%2 == 1):
            if len(matrix) > len(matrix[0]):
                for j in range(k//2, len(matrix) - k//2):
                    ans.append(matrix[j][k//2])
            else:
                for l in range(k//2, len(matrix[0]) - k//2):
                    ans.append(matrix[k//2][l])
        return ans