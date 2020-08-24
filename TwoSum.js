/*
* https://leetcode.com/problems/two-sum/
*
* Given an array of integers, return indices of the
* two numbers such that they add up to a specific target.
*
* Example           Input: nums = [2, 7, 11, 15], target = 9
*                   Output: [0, 1]
*/

const twoSum = function(nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.get(target - nums[i]) !== undefined) {
            return [map.get(target - nums[i]), i]
        }
        map.set(nums[i], i)
    }
};