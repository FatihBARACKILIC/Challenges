# MAXIMIZE STOCK TRADING PROFIT

[Maximize Stock Trading Profit](https://www.codecademy.com/code-challenges/code-challenge-maximize-stock-trading-profit-javascript)
Given the daily values of a stock, create a function called maxProfitDays() that, given a list of integers, will return the index value of the two elements that represent the day on which one should have bought a share and the day on which one should have sold a share based on the max profit.

A list of integers will represent the stock price at the beginning or “opening bell” of each day for a week. You are required to buy and sell only once. You also must buy a stock before selling it.

For example, given the list ```[17, 11, 60, 25, 150, 75, 31, 120]```, you can assume that index 0 represents day 0 and index 7 represents day 7. In this case, purchasing on day 1 and selling on day 4 would yield the most profit. If we were to call ```maxProfitDays([17, 11, 60, 25, 150, 75, 31, 120])```, the function would return ```[1, 4]```.

This challenge was reported to have been asked at interviews with Google and Amazon. If you’ve covered the material in [Pass the Technical Interview with JavaScript](https://www.codecademy.com/learn/paths/pass-the-technical-interview-with-javascript) or an equivalent, you should be able to solve this challenge.

```Javascript
function maxProfitDays(stockPrices) {


}

// Leave this so we can test your code:
module.exports = maxProfitDays;
```