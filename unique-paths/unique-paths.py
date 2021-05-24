import operator as op
from functools import reduce

class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        if n>1:
            return nCr(m+n-2, n-1)
        else:
            return 1
            
def nCr(n, r):
    r = min(r, n-r)
    numerator = reduce(op.mul, range(n, n-r, -1), 1)
    denominator = reduce(op.mul, range(1, r+1), 1)
    return numerator // denominator