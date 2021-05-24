class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        right_end = 0
        left_end = 0
        sum_arr = 0
        ans = -2**31
        while right_end < len(nums):
            right_end = right_end+1
            sum_arr = sum_arr + nums[right_end-1]
            if (sum_arr > ans):
                ans = sum_arr
            
            if (sum_arr < 0):
                left_end = right_end
                sum_arr = 0
        return ans