function FirstFactorial(num) {
  let result = 1
  while (num > 1) result *= num--

  // code goes here
  return result
}

// keep this function call here
console.log(FirstFactorial(4))
console.log(FirstFactorial(8))
