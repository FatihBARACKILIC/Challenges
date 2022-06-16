// https://leetcode.com/problems/longest-common-prefix/

const longestCommonPrefix = (strs) => {
  let prefix = strs[0]

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1)
    }
  }
  return prefix
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
