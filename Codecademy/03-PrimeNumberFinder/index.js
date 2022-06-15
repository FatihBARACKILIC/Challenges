function isPrime(n) {
  for (let i = 2; i < n; i++) if (n % i == 0) return false
  return true
}

function primeFinder(n) {
  const arr = []
  for (let i = 2; i <= n; i++) if (isPrime(i)) arr.push(i)
  return arr
}

console.log(primeFinder(11))

// Leave this so we can test your code:
module.exports = primeFinder
