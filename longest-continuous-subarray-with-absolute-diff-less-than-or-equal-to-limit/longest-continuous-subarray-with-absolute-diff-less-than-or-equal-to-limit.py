class Solution:
    def longestSubarray(self, nums: List[int], limit: int) -> int:
        if len(nums) == 0:
            return 0
        
        max_len = 1
        inc_deque = [0] # indices of increasing numbers
        dec_deque = [0] # indcies of decreasing numbers
        
        left_ptr = 0
        for right_ptr in range(1, len(nums)):
            # add the new number and remove from left
            right_num = nums[right_ptr]
            while len(inc_deque) > 0 and nums[inc_deque[-1]] > right_num:
                inc_deque.pop(-1)
            inc_deque.append(right_ptr)
            while len(dec_deque) > 0 and nums[dec_deque[-1]] < right_num:
                dec_deque.pop(-1)
            dec_deque.append(right_ptr)
            minimum = nums[inc_deque[0]]
            maximum = nums[dec_deque[0]]
            while maximum - minimum > limit:
                # remove left
                while len(inc_deque) > 0 and inc_deque[0] <= left_ptr:
                    inc_deque.pop(0)
                while len(dec_deque) > 0 and dec_deque[0] <= left_ptr:
                    dec_deque.pop(0)
                left_ptr += 1
                minimum = nums[inc_deque[0]]
                maximum = nums[dec_deque[0]]
            # print(inc_deque, dec_deque, minimum, maximum, left_ptr, right_ptr)
            max_len = max(max_len, right_ptr - left_ptr + 1)

        return max_len