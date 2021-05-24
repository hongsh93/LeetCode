class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        left_prod = [1]
        right_prod = [1]
        n = len(nums)
        for i in range(1, n):
            left_prod.append(left_prod[i-1] * nums[i-1])
        for i in range(1, n):
            right_prod.append(right_prod[i-1] * nums[n-i])
        ans = []
        for i in range(0, n):
            ans.append(left_prod[i] * right_prod[n-i-1])
        return ans