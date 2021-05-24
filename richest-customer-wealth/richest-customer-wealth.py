class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        max_acc = 0
        for l in accounts:
            sum_acc = 0
            for i in l:
                sum_acc = sum_acc + i
            if (sum_acc > max_acc):
                max_acc = sum_acc
        return max_acc