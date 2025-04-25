// To find the sum all elements of an array?

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9] // 45
// arr[0] = 1, arr[1] = 2
// sumOfTwo = arr[0] + arr[1] = 1 + 2 = 3
// sumOfThree = sumOfTwo + arr[2]
// sumOfThree = 3 + 3
// sumOfThree = 6
// sumOfFour = sumOfThree + arr[3];
// sumOfFour = 6 + 4
// sumOfFour = 10
// sumOfFive = sumOfFour + arr[4]
// sumOfFive = 10 + 5
// sumOfFive = 15;
// sumOfSix = sumOfFive + arr[5]
// sumOfSix = 15 + 6
// sumOfSix = 21
// sumOfSeven = sumOfSix + arr[6]
// sumOfSeven = 21 + 7
// sumOfSeven = 28
// sumOfEight = sumOfSeven + arr[7]
// sumOfEight = 28 + 8
// sumOfEight = 36
// sumOfNine = sumOfEight + arr[8]
// sumOfNine = 36 + 9
// sumOfNine = 45

// [3,4,6,7,8,9,10,2,5,] // 54


function findSumOfArr(arr) {

  let len = arr.length -1
  console.log(len)
  var sumOfAllPreviousValue = 0;
  for (let i = 0; i <= len; i++ ) { 
  sumOfAllPreviousValue = sumOfAllPreviousValue + arr[i]

  }
   return sumOfAllPreviousValue
}
console.log(findSumOfArr([3, 4, 6, 7, 8, -9, 10, 2, 5,])) // 
