class Solution:
    def reverse(self, x: int) -> int:
        temp = 0
        n = 2**31
        if str(x)[0] == '-':
            temp = int(str(x)[0] + str(x)[:0:-1])
        else:
            temp = int(str(x)[::-1])
        if (temp > n-1 or temp < -n):
            temp = 0
        return temp