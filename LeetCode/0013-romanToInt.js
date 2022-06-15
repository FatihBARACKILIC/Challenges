// https://leetcode.com/problems/roman-to-integer/

// const romanToInt = (s) => {
//   const characterList = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   }
//   let total = 0
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (characterList[s[i]] <= characterList[s[i + 1]] / 5) {
//       total -= characterList[s[i]]
//     } else total += characterList[s[i]]
//   }

//   return total
// }

var romanToInt = function (s) {
  const digitLib = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let n = 0
  let x = []

  for (let l of s) {
    x.push(digitLib[l])
  }

  for (let i = 0; i < x.length; i++) {
    if (x[i] < x[i + 1]) {
      n += x[i + 1] - x[i]
      i++
    } else {
      n += x[i]
    }
  }

  return n
}

console.log(romanToInt("III")) //> 3
console.log(romanToInt("LVIII")) //> 58
console.log(romanToInt("MCMXCIV")) //> 1994
console.log(romanToInt("XXVII")) //> 27
