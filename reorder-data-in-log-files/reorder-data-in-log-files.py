class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        ans = []
        pos = 0
        if (len(logs) > 0):
            ans = [logs[0]]
            if (logs[0].split(" ")[1] >= "a"):
                pos += 1
        for i in range(1, len(logs)):
            if (logs[i].split(" ")[1] >= "a"):
                #print(i, logs[i], pos, "str", ans)
                if pos == 0:
                    ans = [logs[i]] + ans
                for j in range(0, pos):
                    if logs[i].split(" ")[1:] < ans[j].split(" ")[1:]:
                        ans = ans[0:j] + [logs[i]] + ans[j:]
                        break
                    if logs[i].split(" ")[1:] == ans[j].split(" ")[1:]:
                        if (logs[i].split(" ")[0] < ans[j].split(" ")[0]):
                            ans = ans = ans[0:j] + [logs[i]] + ans[j:]
                            break
                        temp = j+1
                        while(ans[temp].split(" ")[1:] == logs[i].split(" ")[1:] and logs[i].split(" ")[0] > ans[j].split(" ")[0] and temp < pos):
                            temp += 1
                        ans = ans = ans[0:temp] + [logs[i]] + ans[temp:]
                        break
                    if j == pos-1:
                        ans = ans[0:pos] + [logs[i]] + ans[pos:]
                pos += 1
            else:
                #print(i, logs[i], pos, "num", ans)
                ans = ans + [logs[i]]
        return ans