function runningSum(nums: number[]): number[] {
  const newNums: number[] = []
  nums.reduce((total, value) => newNums.push(total + value) && total + value, 0)
  return newNums
}

console.log(runningSum([1, 2, 3, 4]))
console.log(runningSum([1, 1, 1, 1]))
console.log(runningSum([3, 1, 2, 10, 1]))
