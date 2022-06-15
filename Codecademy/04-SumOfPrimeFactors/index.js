function isPrime(n) {
  if (n <= 1) return false
  else if (n <= 3) return true

  if (n % 2 === 0 || n % 3 === 0) return false

  for (let i = 5; i < n / 2; i += 6)
    if (n % i === 0 || n % (i + 2) === 0) return false

  return true
}

function sumOfPrimeFactors(n) {
  let sum = 0
  for (let i = 1; i <= n; i++) if (n % i === 0) if (isPrime(i)) sum += i
  return sum
}

console.log(sumOfPrimeFactors(91))
// Leave this so we can test your code:
module.exports = sumOfPrimeFactors
