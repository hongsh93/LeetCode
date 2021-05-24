class Solution:
    def simplifyPath(self, path: str) -> str:
        while "//" in path:
            path = path.replace("//", "/")
        temp = path.split("/")
        
        if (temp[len(temp)-1] == ''):
            temp = temp[1:-1]
        else:
            temp = temp[1:]
            
        depth = 0
        ans = ''
        for path in temp:
            if path == '.':
                continue
            elif path == '..':
                if (depth > 0):
                    ans = '/'.join(ans.split("/")[:-1])
                    depth -= 1
            else:
                ans = ans + '/' + path
                depth += 1
        
        if (ans == ''):
            return "/"
        else:
            return ans