class Solution:
    def isValid(self, s: str) -> bool:
        valid = True
        while s != "" and valid:
            valid = False
            if s.find("()") > -1:
                s = s.replace("()", "")
                valid = True
            if s.find("{}") > -1:
                s = s.replace("{}", "")
                valid = True
            if s.find("[]") > -1:
                s = s.replace("[]", "")
                valid = True
        return valid