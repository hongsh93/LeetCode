from collections import defaultdict
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        ans = []
        if len(nums) >= 3:
            for a in range(len(nums)-2):
                d = defaultdict(int)
                for b in range(a+1, len(nums)):
                    value = -nums[a] - nums[b]
                    #print(nums[a], nums[b], value, d, d[value])
                    if d[value] > 0:
                        [x,y,z] = sorted([nums[a], value, nums[b]])
                        if ([x,y,z] not in ans):
                            ans.append([x,y,z])
                    else:
                        d[nums[b]] = d[nums[b]] + 1
        return ans