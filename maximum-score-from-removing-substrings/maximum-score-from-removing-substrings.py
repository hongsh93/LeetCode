class Solution:
    def maximumGain(self, s: str, x: int, y: int) -> int:
        ans = 0
        if x>=y:
            while ("ab" in s or "ba" in s):
                if ("ab" in s):
                    temp = "a"*100 + "b"*100
                    if (temp in s):
                        ans += x*100*s.count(temp)
                        s = s.replace(temp, "")
                    ans += x*s.count("ab")
                    s = s.replace("ab", "")
                elif ("ba" in s):
                    temp = "b"*100 + "a"*100
                    if (temp in s):
                        ans += y*100*s.count(temp)
                        s = s.replace(temp, "")
                    ans += y*s.count("ba")
                    s = s.replace("ba", "")
        else:
            while ("ab" in s or "ba" in s):
                if ("ba" in s):
                    temp = "b"*100 + "a"*100
                    if (temp in s):
                        ans += y*100*s.count(temp)
                        s = s.replace(temp, "")
                    ans += y*s.count("ba")
                    s = s.replace("ba", "")
                elif ("ab" in s):
                    temp = "a"*100 + "b"*100
                    if (temp in s):
                        ans += x*100*s.count(temp)
                        s = s.replace(temp, "")
                    ans += x*s.count("ab")
                    s = s.replace("ab", "")
                    
        return ans