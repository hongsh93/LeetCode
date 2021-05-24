class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        false_dict = []
        def wd_br(s, wordDict):
            if s in false_dict:
                return False
            elif len(s)==0:
                return True
            for i in range(len(s)):
                if s[0:i+1] in wordDict:
                    if wd_br(s[i+1:], wordDict) == True:
                        return True
                    else:
                        false_dict.append(s[i+1:])
                        continue
                if i==len(s)-1:
                    if s not in wordDict:
                        return False

        return wd_br(s, wordDict)

