// https://leetcode.com/problems/palindrome-number/submissions/

//! const isPalindrome = (x) => x == x.toString().split("").reverse().join("")

const isPalindrome = (x) => {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false

  let curX = x
  let reverseNumber = 0
  while (curX > 0) {
    reverseNumber = reverseNumber * 10 + (curX % 10)
    curX = Math.floor(curX / 10)
  }
  return x === reverseNumber
}

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
