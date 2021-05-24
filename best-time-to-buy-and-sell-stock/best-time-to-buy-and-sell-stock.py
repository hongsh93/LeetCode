class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        ans = 0
        if (len(prices)>0):
            min_price = prices[0]
        for i in range(1, len(prices)):
            if (min_price >= prices[i]):
                min_price = prices[i]
            else:
                if (prices[i]-min_price > ans):
                    ans = prices[i]-min_price
        return ans