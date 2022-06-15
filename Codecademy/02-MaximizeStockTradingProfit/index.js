function maxProfitDays(stockPrices) {
  const data = {
    max: -1,
    maxIndex: -1,
    bestProfit: [-1, -1, -1],
  }
  stockPrices.map((item, index, array) => {
    data.max = Math.max(...array.slice(array.indexOf(item)))
    data.maxIndex = array.indexOf(data.max, index)
    if (data.max - item > data.bestProfit[2])
      data.bestProfit = [data.maxIndex, index, data.max - item]
  })
  return [data.bestProfit[1], data.bestProfit[0]]
}

// console.log(maxProfitDays([17, 11, 60, 25, 150, 75, 31, 120]))
// console.log(maxProfitDays([17, -11, 600, 25, 150, 75, 31, 120]))

const list = [120, 150, 17, 60, 25, 75, 31, 11]
console.log(maxProfitDays(list))

module.exports = maxProfitDays
