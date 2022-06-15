# FIND XTH NUMBER IN ORDER

[GetX](https://www.codecademy.com/code-challenges/code-challenge-find-xth-number-in-order-javascript)
Write a function, ```getX```, that given an int ```x``` and a integer array ```num```, returns the Xth number if the list was in sorted order. In other words, the Xth smallest number.

Function Name: getX

Input: An integer, ```x```, and an unsorted list of integers ```nums``` that aren’t necessarily distinct

Output: The integer corresponding to the Xth number in the sorted list

Example:

```Javascript
getX(2, [5, 10, -3, -3, 7, 9]) => -3
```

The second number in order is -3.

```Javascript
getX(4, [5, 10, -3 , -3, 7, 9]) => 7
```

The fourth number in order is 7.

Note that this assumes the first number is position 1, not 0.

Variations of this challenge have been reported to have been asked at interviews with Facebook. If you’ve covered the material in Pass the Technical Interview with JavaScript or an equivalent, you should be able to solve this challenge. If you have trouble, try refreshing your knowledge there first.

```Javascript
function getX(x, nums) {
  // Write your code here
}

console.log(getX(2, [5, 10, -3, -3, 7, 9]));

// Leave this so we can test your code:
module.exports = getX;
```
