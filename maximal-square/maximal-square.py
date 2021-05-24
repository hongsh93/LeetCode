class Solution:
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        ans = 0
        for i in range (len(matrix)):
            con = 0
            for j in range(len(matrix[0])):
                #print(i, j, con, ans)
                if matrix[i][j] == "1":
                    con += 1
                    len1 = 1
                    temp = True
                    for l in range(1, con):
                        if (i+l < len(matrix)):
                            for m in range(0, l+1):
                                #print (i+l, j-m, matrix[i+l][j-m])
                                if matrix[i+l][j-m] == "0":
                                    temp = False
                                    break
                            for m in range(1, l):
                                if matrix[i+m][j-l] == "0":
                                    temp = False
                                    break
                            if temp == True:
                                len1 += 1
                            else:
                                break
                        else:
                            break
                    area = len1*len1
                    if area > ans:
                        ans = area
                else:
                    con = 0
        return ans