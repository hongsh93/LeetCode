class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        ans = 0
        num_dict = {}
        for i in range(0, len(nums)):
            if (nums[i] in num_dict):
                num_dict[nums[i]] = num_dict[nums[i]]+1
            else:
                num_dict[nums[i]] = 1
        
        for key in num_dict:
            if (key*2 == k):
                ans = ans + int(num_dict[key]/2)
                num_dict[key] = 0
            else:
                if k-key in num_dict:
                    ans = ans + min(num_dict[key], num_dict[k-key])
                    num_dict[k-key] = 0
                    num_dict[key] = 0
        return ans