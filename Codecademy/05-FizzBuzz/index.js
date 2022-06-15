function fizzbuzz(n) {
  const fizzbuzzArr = []
  for (let i = 1; i <= n; i++) {
    let data = ""
    if (i % 3 === 0) data += "Fizz"
    if (i % 5 === 0) data += "Buzz"
    fizzbuzzArr.push(data || i)
  }
  return fizzbuzzArr
}

console.log(fizzbuzz(16))

// Leave this line for testing:
module.exports = fizzbuzz
