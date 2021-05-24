class Solution:
    def minDifficulty(self, jobDifficulty: List[int], d: int) -> int:
        seen = {}
        def divide(l, a):
            n = len(l)
            if n < a:
                return -1
            elif a == 1:
                return max(l)
            elif (n,a) in seen:
                return seen[(n,a)]
            else:
                ans = 10000
                for i in range(n-1):
                    temp1 = max(l[:i+1])
                    temp2 = divide(l[i+1:], a-1)
                    if temp2 != -1: 
                        seen[(n-i-1,a-1)] = temp2
                        temp1 += temp2
                        if (ans > temp1):
                            ans = temp1
                    else:
                        break
                return ans
        return divide(jobDifficulty, d)