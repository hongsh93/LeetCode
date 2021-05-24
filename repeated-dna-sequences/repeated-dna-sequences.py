class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        ans = []
        dic = defaultdict(int)
        for i in range(len(s)-9):
            if dic[s[i:i+10]] == 0:
                dic[s[i:i+10]] = 1
            else:
                if s[i:i+10] not in ans:
                    ans.append(s[i:i+10])
        return ans