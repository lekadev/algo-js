/*
* https://leetcode.com/problems/remove-duplicates-from-sorted-array
*
* Given a sorted array nums, remove the duplicates in-place such
* that each element appear only once and return the new length.
*
* Do not allocate extra space for another array, you must do this
* by modifying the input array in-place with O(1) extra memory.
*
* Example           Input: nums = [1,1,2]
*                   Output: 2 with first two elements in nums being [1,2]
*
*                   Input: nums = [0,0,1,1,1,2,2,3,3,4]
*                   Output: 5 with first five elements in nums being [0,1,2,3,4]
*/

const removeDuplicates = function(nums) {
    let lastUnique = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[lastUnique] !== nums[i]) {
            nums[++lastUnique] = nums[i]
        }
    }
    return ++lastUnique
}