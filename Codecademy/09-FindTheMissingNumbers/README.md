# FIND THE MISSING NUMBERS

[Find the Missing Numbers](https://www.codecademy.com/code-challenges/code-challenge-find-the-missing-numbers-javascript)
You have a bag containing tiles with numbers ```[1, 2, 3, …, n]``` written on them. Each number appears exactly once, so there are ```n``` tiles and ```n``` numbers. Now, without looking, ```k``` number tiles are randomly picked out of the bag and discarded. Create a ```missingNos()``` function that takes in a list and k, and returns the missing numbers in ascending order (from smallest to greatest).

For example, ```missingNos([1, 2, 4, 5, 6, 7, 8, 10], 2)``` should return ```[3, 9]```.

This challenge was reported to have been asked at interviews with Twitter. If you’ve covered the material in Pass the Technical Interview with JavaScript or an equivalent, you should be able to solve this challenge. If you have trouble, try refreshing your knowledge there first.

```Javascript
function missingNos(array, k) {

}

const testArray = [1, 2, 4, 5, 6, 7, 8, 10];
console.log(missingNos(testArray, 2));

// Leave this so we can test your code:
module.exports = missingNos;
```
