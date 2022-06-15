function getX(x, nums) {
  return x > nums.length || nums.length === 0
    ? 0
    : nums.sort((a, b) => a - b)[x - 1]
}

console.log(getX(2, [5, 10, -3, -3, 7, 9]))

// Leave this so we can test your code:
module.exports = getX
