class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = s.lower()
        word = ""
        for i in range(len(s)):
            if ((s[i]>="a" and s[i]<="z") or (s[i]>="0" and s[i]<="9")):
                word += s[i]
        ans = True
        for i in range(len(word)//2):
            if (word[i] != word[len(word)-1-i]):
                ans = False
                break
        return ans