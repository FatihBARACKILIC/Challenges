function missingNos(array, k) {
  return [...Array(array.length + k).keys()].filter(
    (i) => !array.includes(i) && i > 0
  )
}

const testArray = [1, 2, 4, 5, 6, 7, 8, 10]
console.log(missingNos(testArray, 2))

// Leave this so we can test your code:
module.exports = missingNos
