// https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  let dic = {}
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in dic) {
      return [dic[target - nums[i]], i]
    }
    dic[nums[i]] = i
  }
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))
