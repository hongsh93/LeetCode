class Solution:
    def validPalindrome(self, s: str) -> bool:
        ans = True
        stack = 0
        for i in range(len(s)//2):
            if (s[i+stack] != s[len(s)-1-i]) and (s[i] != s[len(s)-1-i-stack]):
                stack += 1
                if (s[i+stack] != s[len(s)-1-i]) and (s[i] != s[len(s)-1-i-stack]):
                    ans = False
                    break;
                if stack == 2:
                    ans=False
                    break
        return ans