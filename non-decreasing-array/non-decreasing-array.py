class Solution:
    def checkPossibility(self, nums: List[int]) -> bool:
        edit = 0
        for i in range(1, len(nums)):
            if (nums[i] < nums[i-1]):
                temp = False
                if i >= 2:
                    if nums[i] >= nums[i-2]:
                        temp = True
                else:
                    temp = True
                if i <= len(nums)-2:
                    if nums[i-1] <= nums[i+1]:
                        temp = True
                else:
                    temp = True
                if temp:
                    edit = edit+1
                if temp == False or edit>=2:
                    return False
        return True