class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda x:x[0])
        if len(intervals) > 0:
            ans = [intervals[0]]
        for i in range(1, len(intervals)):
            if (intervals[i][1] > ans[len(ans)-1][1]):
                if (ans[len(ans)-1][1] >= intervals[i][0]):
                    temp = ans.pop()
                    temp[1] = max(temp[1], intervals[i][1])
                    ans.append(temp)
                else:
                    ans.append(intervals[i])
        return ans