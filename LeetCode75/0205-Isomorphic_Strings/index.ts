function isIsomorphic(s: string, t: string): boolean {
  let wordMatches: { [prop: string]: string } = {}

  const newS = s
    .split("")
    .map((value, index) => {
      if (!(value in wordMatches)) wordMatches[value] = t.charAt(index)
      return (value = wordMatches[value])
    })
    .join("")

  return (
    newS === t && new Set(newS.split("")).size === new Set(s.split("")).size
  )
}

console.log(isIsomorphic("egg", "add"))
console.log(isIsomorphic("foo", "bar"))
console.log(isIsomorphic("paper", "title"))
console.log(isIsomorphic("badc", "baba"))
