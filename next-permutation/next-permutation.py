class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        
        n = len(nums)
        i=n-2
        while (i>=0 and nums[i] >= nums[i+1]):
            i -= 1
        if i>=0:
            v = nums[i]
            min_idx = n-1
            for j in range(n - 2, i, -1):
                if nums[j]>v and (nums[j] < nums[min_idx] or nums[min_idx] <= v):
                    min_idx = j
            nums[i], nums[min_idx] = nums[min_idx], nums[i]
        nums[i+1:] =  nums[i+1:][::-1]