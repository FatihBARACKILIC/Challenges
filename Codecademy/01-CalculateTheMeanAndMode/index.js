function statsFinder(array) {
  let arrLength = array.length
  let total = 0
  let occurringValue

  array = array.map((element, index, arr) => {
    total += element
    let indexes = []

    //> aynı elemandan başka var mı onu kontrol ediyor
    //: Checks same element
    while ((index = arr.indexOf(element, index + 1)) > -1) indexes.push(index)

    //> aynı eleman varsa. eleman ve toplam sayıyı döndürür
    //: if have same element. it returns element and total number
    if (indexes.length > 0) return [element, indexes.length]
  })

  //> undefined verileri siler
  //: Clears undefined data
  array = array.filter((element) => element !== undefined)

  //> Önce Elemanları sıralar
  //: sorts elements first
  array = array.sort((f, s) => f[0] - s[0])

  //> Sonra eleman indekslerini sıralar
  //: sorts elements later
  array = array.sort((f, s) => f[1] - s[1])

  occurringValue = array[array.length - 1][0]
  return [total / arrLength, occurringValue]
}

console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]))

// Leave this so we can test your code:
module.exports = statsFinder
