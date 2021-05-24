class Solution:
    def trap(self, height: List[int]) -> int:
        if len(height) > 0:
            local_max = height[0]
        max_pos = 0
        ans = 0
        temp = []
        for i in range(1, len(height)):
            if height[i] > height[i-1]:
                if local_max > height[i]:
                    for j in range(0, len(temp)):
                        if temp[j] < height[i]:
                            ans = ans + height[i] - temp[j]
                            temp[j] = height[i]
                    temp.append(height[i])
                else:
                    for j in  range(0, len(temp)):
                        if temp[j] < height[i]:
                            ans = ans + local_max - temp[j]
                            temp[j] = local_max
                    local_max = height[i]
                    max_pos = i
                    temp = []
            else:
                temp.append(height[i])
            #print(ans, temp, local_max, max_pos)
        return ans