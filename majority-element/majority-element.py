class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        ans = -1
        for i in set(nums):
            if nums.count(i) > len(nums)/2:
                print(i, nums.count(i), len(nums)/2)
                ans = i
        return ans