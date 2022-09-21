function FindIntersection(strArr) {
  if (strArr.length < 2) return false

  const filteredArray = strArr[0]
    .split(", ")
    .filter((val) => strArr[1].split(", ").indexOf(val) >= 0)
    .join(",")

  // code goes here
  return filteredArray || false
}

// keep this function call here
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]))
console.log(FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]))
