// https://leetcode.com/problems/two-sum/

// var twoSum = function (nums, target) {
//   let j
//   for (let i = 0; i < nums.length; i++) {
//     if (-1 < (j = nums.indexOf(parseInt(target - nums[i]), 1 + i)))
//       return [i, j]
//   }
//   return null
// }
var twoSum = function (nums, target) {
  let dic = {}
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in dic) {
      return [dic[target - nums[i]], i]
    }
    dic[nums[i]] = i
  }
}
let nums = [20, 350, -50, 20, 35, 360, 455651]
console.log(twoSum(nums, 55))

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))
