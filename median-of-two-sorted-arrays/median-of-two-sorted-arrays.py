class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        ans = 0
        nums1_ptr = 0
        nums2_ptr = 0
        if len(nums1) == 0:
            if len(nums2)%2 == 1:
                return nums2[len(nums2)//2]
            else:
                return (nums2[len(nums2)//2] + nums2[len(nums2)//2-1])/2
            
        if len(nums2) == 0:
            if len(nums1)%2 == 1:
                return nums1[len(nums1)//2]
            else:
                return (nums1[len(nums1)//2] + nums1[len(nums1)//2-1])/2
        
        while nums1_ptr + nums2_ptr < (len(nums1) + len(nums2))//2:
            if (nums1[nums1_ptr] > nums2[nums2_ptr]):
                nums2_ptr = nums2_ptr+1
                if (nums2_ptr == len(nums2)):
                    if ((len(nums1) + len(nums2))%2 == 1):
                        return nums1[(len(nums1) + len(nums2))//2 - len(nums2)]
                    else:
                        if (len(nums1) + len(nums2))//2 - len(nums2) != 0:
                            if nums2[len(nums2)-1] < nums1[(len(nums1) + len(nums2))//2- len(nums2)-1]:
                                return (nums1[(len(nums1) + len(nums2))//2 - len(nums2)] + nums1[(len(nums1) + len(nums2))//2 - len(nums2)-1])/2
                            else:
                                return (nums1[(len(nums1) + len(nums2))//2 - len(nums2)] + nums2[len(nums2)-1])/2
                        else:
                            return (nums1[(len(nums1) + len(nums2))//2 - len(nums2)] + nums2[len(nums2)-1])/2
                         
            else:
                nums1_ptr = nums1_ptr+1
                if (nums1_ptr == len(nums1)):
                    if ((len(nums1) + len(nums2))%2 == 1):
                        return nums2[(len(nums1) + len(nums2))//2 - len(nums1)]
                    else:
                        if (len(nums1) + len(nums2))//2 - len(nums1) != 0:
                            if nums1[len(nums1)-1] < nums2[(len(nums1) + len(nums2))//2 - len(nums1)-1]:
                                return (nums2[(len(nums1) + len(nums2))//2 - len(nums1)] + nums2[(len(nums1) + len(nums2))//2 - len(nums1)-1])/2
                            else:
                                return (nums2[(len(nums1) + len(nums2))//2 - len(nums1)] + nums1[len(nums1)-1])/2
                        else:
                            return (nums2[(len(nums1) + len(nums2))//2 - len(nums1)] + nums1[len(nums1)-1])/2
        
        if ((len(nums1) + len(nums2))%2 == 1):
            if (nums1[nums1_ptr] > nums2[nums2_ptr]):
                return nums2[nums2_ptr]
            else:
                return nums1[nums1_ptr]
        else:
            if (nums1[nums1_ptr] > nums2[nums2_ptr]):
                if nums2_ptr != 0:
                    if nums1_ptr != 0:
                        if (nums1[nums1_ptr-1] < nums2[nums2_ptr-1]):
                            return (nums2[nums2_ptr] + nums2[nums2_ptr-1])/2
                        else:
                            return (nums2[nums2_ptr] + nums1[nums1_ptr-1])/2
                    else:
                        return (nums2[nums2_ptr] + nums2[nums2_ptr-1])/2
                else:
                    return (nums2[nums2_ptr] + nums1[nums1_ptr-1])/2
            else:
                if nums1_ptr != 0:
                    if nums2_ptr != 0:
                        if (nums1[nums1_ptr-1] > nums2[nums2_ptr-1]):
                            return (nums1[nums1_ptr] + nums1[nums1_ptr-1])/2
                        else:
                            return (nums2[nums2_ptr-1] + nums1[nums1_ptr])/2
                    else:
                        return (nums1[nums1_ptr] + nums1[nums1_ptr-1])/2
                else:
                    return (nums2[nums2_ptr-1] + nums1[nums1_ptr])/2