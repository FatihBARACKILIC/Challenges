function pivotIndex(nums: number[]): number {
  const total = nums.reduce((sum, item) => sum + item, 0)

  let sum = 0
  let result = -1

  nums.forEach((item, index) => {
    if (sum === (total - item) / 2 && result === -1) result = index
    sum += item
  })

  return result
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([1, 2, 3]))
console.log(pivotIndex([2, 1, -1]))
