class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        i=0
        ptr = 0
        while i < len(p) and ptr < len(s):
            #print(i, p[i], p, ptr, s[ptr], s)
            if i+1 < len(p):
                if p[i+1] == "*":
                    if p[i] != ".":
                        temp = self.isMatch(s[ptr:], p[i+2:])
                        for j in range(ptr, len(s)):
                            if s[j] == p[i]:
                                temp = max(temp, self.isMatch(s[j+1:], p[i+2:]))
                                ptr += 1
                            else:
                                return temp
                        return temp
                    else:
                        i+=2
                        temp = False
                        for j in range(ptr, len(s)+1):
                            temp = max(temp, self.isMatch(s[j:], p[i:]))
                        return temp
                else:
                    if s[ptr] != p[i] and p[i] != ".":
                        return False
                    ptr += 1
                    i += 1
            else:
                if s[ptr] != p[i] and p[i] != ".":
                    return False
                ptr += 1
                i += 1
        #print(i, len(p), ptr, len(s))
        if ptr == len(s) and i==len(p):
            return True
        elif ptr == len(s):
            if (len(p)-i)%2 == 0:
                while i<len(p):
                    if p[i+1] == "*":
                        i += 2
                    else:
                        break;
                if i==len(p):
                    return True
        return False