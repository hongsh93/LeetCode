from collections import defaultdict
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        ans = 0
        temp=set(nums)
        d = defaultdict(int)
        for i in temp:
            conse = 1
            if (i-1 not in temp and d[i] == 0):
                d[i] = 1
                while (i+1 in temp and d[i+1] != 1):
                    conse += 1
                    i += 1
                    d[i] = 1
            if (conse > ans):
                ans = conse
        return ans