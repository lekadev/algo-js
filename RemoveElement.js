/*
* https://leetcode.com/problems/remove-element
*
* Given an array nums and a value val, remove all instances
* of that value in-place and return the new length.
*
* Do not allocate extra space for another array, you must do this
* by modifying the input array in-place with O(1) extra memory.
*
* Example           Input: nums = [3,2,2,3], val = 3
*                   Output: 2 with first two elements in nums being [2,2]
*
*                   Input: nums = [0,1,2,2,3,0,4,2], val = 2
*                   Output: 5 with first five elements in nums being [0,1,3,0,4]
*/

const removeElement = function(nums, val) {
    let shift = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            shift++
        } else if (shift > 0 && i - shift >= 0) {
            nums[i - shift] = nums[i]
        }
    }
    return nums.length - shift
}