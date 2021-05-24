class Solution:
    def maximumBinaryString(self, binary: str) -> str:
        loc_zero = -1
        ans = ""
        for i in range(len(binary)):
            #print(ans, loc_zero, i)
            if binary[i] == "0":
                if loc_zero >= 0 and loc_zero == i-1:
                    #print(binary[:loc_zero], binary[i+1:])
                    ans += "1"
                    loc_zero = i
                elif loc_zero >= 0 and loc_zero != i-1:
                    ans += "1"
                    loc_zero = loc_zero+1
                else:
                    loc_zero = i
            elif loc_zero <= -1:
                ans += "1"
        
        if (loc_zero >= 0):
            ans += "0"
            ans += "1" * (len(binary)-loc_zero-1)
        return ans
                    
                