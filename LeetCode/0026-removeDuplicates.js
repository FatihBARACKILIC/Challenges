//> https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
// const removeDuplicates = (nums) => {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]) nums.splice(i--, 1)
//   }
//   return nums.length
// }

const removeDuplicates = (nums) => {
  let counter = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[counter] !== nums[i]) {
      counter++
      nums[counter] = nums[i]
    }
  }
  return counter + 1
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
console.log(removeDuplicates([1, 1, 2]))
