from collections import defaultdict
class Solution:
    def climbStairs(self, n: int) -> int:
        d = defaultdict(int)
        d[2] = 2
        d[1] = 1
        def climb(n):
            if d[n] == 0:
                d[n] = climb(n-1) + climb(n-2)
            return d[n]
        return climb(n)