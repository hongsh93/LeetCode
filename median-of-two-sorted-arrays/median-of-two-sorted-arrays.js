/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2)
    let l = arr.length
    arr.sort((a,b) => a-b)
    console.info(arr)
    if (l%2 === 0) {
        return (arr[l/2-1] + arr[l/2])/2
    }
    else {
        return arr[(l-1)/2]
    }
};