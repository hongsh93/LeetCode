class Solution:
    def totalMoney(self, n: int) -> int:
        a = n//7
        b = n%7
        ans = 0
        for i in range(a):
            ans += 28 + 7*i
        for j in range(b):
            ans += (a+j+1)
        return ans