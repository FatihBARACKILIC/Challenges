const uniqueCharacters = (stringIn) => {
  let ctrl = true
  if (!stringIn) return new Error("Empty Data!")
  stringIn
    .replace(" ", "")
    .toLowerCase()
    .split("")
    .map((item, index, array) => {
      if (array.indexOf(item, index + 1) >= 0) ctrl = false
    })
  return ctrl
}

console.log(uniqueCharacters("apple"))
console.log(uniqueCharacters("demli çay"))
console.log(uniqueCharacters(""))

// Leave this so we can test your code:
module.exports = uniqueCharacters
