function isSubsequence(s: string, t: string): boolean {
  let lastFound: number = -1
  let result: boolean = true

  s.split("").map((value) => {
    if (lastFound < t.indexOf(value, lastFound + 1))
      lastFound = t.indexOf(value, lastFound + 1)
    else result = false
  })

  return result
}

console.log(isSubsequence("abc", "ahbgdc"))
console.log(isSubsequence("axc", "ahbgdc"))
console.log(isSubsequence("acb", "ahbgdc"))
console.log(isSubsequence("ab", "baab"))
