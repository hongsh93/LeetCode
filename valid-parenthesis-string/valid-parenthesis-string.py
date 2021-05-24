class Solution:
    def checkValidString(self, s: str) -> bool:
        margin = 0
        err = 0
        left = 0
        for i in s:
            if i == "(":
                margin += 1
            elif i == ")":
                margin -= 1
            else:
                err += 1
            
            if margin < 0 and margin*(-1) > err:
                print(1)
                return False
            
            if err - margin > 0 and margin >= 0:
                left = max(left, err-margin)
                
            if err > 0 and margin < 0:
                err -= 1
                margin += 1
            # print(margin, err, left)
        # if abs(margin) > err + (left//2) :
        #     print(margin, err, left, 1)
        #     return False
        
        margin = 0
        err = 0
        left = 0
        for i in s[::-1]:
            if i == ")":
                margin += 1
            elif i == "(":
                margin -= 1
            else:
                err += 1
            
            if margin < 0 and margin*(-1) > err:
                return False
            
            if err - margin > 0 and margin >= 0:
                print(2)
                left = max(left, err-margin)
                
            if err > 0 and margin < 0:
                err -= 1
                margin += 1
            # print(margin, err, left)
        # if abs(margin) > err + (left//2) :
        #     print(margin, err, left, 2)
        #     return False
        
        return True