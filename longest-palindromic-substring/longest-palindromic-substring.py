class Solution:
    def longestPalindrome(self, s: str) -> str:
        mid_word_ptr = 0
        ans = ""
        while (mid_word_ptr<len(s)):
            max_len2 = min(mid_word_ptr, len(s)-mid_word_ptr)
            max_len1 = min(mid_word_ptr, len(s)-mid_word_ptr-1)
            #print(max_len2, max_len1)
            if len(ans) < 2*max_len1+1:
                #print(s[mid_word_ptr-max_len1:mid_word_ptr+max_len1+1])
                temp = longestPal(s[mid_word_ptr-max_len1:mid_word_ptr+max_len1+1])
                if len(ans) < len(temp):
                    ans = temp
                    
            if len(ans) < 2*max_len2:
                #print(s[mid_word_ptr-max_len2:mid_word_ptr+max_len2])
                temp = longestPal(s[mid_word_ptr-max_len2:mid_word_ptr+max_len2])
                if len(ans) < len(temp):
                    ans = temp
                        
            mid_word_ptr += 1
        return ans
            
def longestPal(s):
    pal_len=0
    for i in range(len(s)//2):
        if (s[i] != s[len(s)-1-i]):
            pal_len = i+1
    return s[pal_len:len(s)-pal_len]