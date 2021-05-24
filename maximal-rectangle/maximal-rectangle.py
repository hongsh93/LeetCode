class Solution:
    def maximalRectangle(self, matrix: List[List[str]]) -> int:
        if len(matrix) == 0:
            return 0
        ans = 0
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if int(matrix[i][j]) == 0:
                    continue
                area = 1
                temp = i+1
                while temp<len(matrix) and int(matrix[temp][j]) == 1:
                    temp += 1
                while temp>i:
                    temp2 = j+1
                    area = temp-i
                    while temp2 < len(matrix[0]):
                        for l in range(i, temp):
                            if int(matrix[l][temp2]) == 0:
                                temp2 = len(matrix[0])
                                break                                
                        if temp2 < len(matrix[0]):
                            area += temp-i
                            #print(area, temp-i, temp, temp2, i, j)
                            temp2 += 1
                    if area > ans:
                        ans = area
                    temp = temp-1
        return ans