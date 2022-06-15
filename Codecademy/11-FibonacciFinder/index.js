function fibFinder(n) {
  const fibArray = [0, 1]
  for (let i = 2; i <= n; i++) fibArray.push(fibArray[i - 1] + fibArray[i - 2])
  return fibArray[n]
}

console.log(fibFinder(6))

// Leave this so that we can test your code:
module.exports = fibFinder
