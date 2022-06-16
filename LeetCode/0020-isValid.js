// https://leetcode.com/problems/valid-parentheses/

const isValid = (s) => {
  const brackets = { "(": ")", "[": "]", "{": "}" }

  let newArr = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] in brackets) newArr.push(s[i])
    else {
      if (brackets[newArr.pop()] !== s[i]) return false
    }
  }
  return !newArr.length
}
console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("(){}}{"))
