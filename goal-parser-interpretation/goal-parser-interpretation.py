class Solution:
    def interpret(self, command: str) -> str:
        temp = command.replace("()", "o").replace("(al)", "al")
        return temp