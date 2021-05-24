class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        first, last = 0, 0
        ans = 0
        while(first<=last and last<len(s)):
            last += 1
            temp = s[first:last+1]
            if len(temp) > len(set(temp)):
                first += 1
            else:
                if (len(temp) > ans):
                    ans = len(temp)
        return ans