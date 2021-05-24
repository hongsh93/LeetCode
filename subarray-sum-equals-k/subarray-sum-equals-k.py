from collections import defaultdict
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        ans = 0
        d = defaultdict(int)
        sum = 0
        for i in range(len(nums)):
            sum += nums[i]
            if sum == k:
                ans += 1
            ans = ans+d[sum-k]
            d[sum] += 1
        return ans