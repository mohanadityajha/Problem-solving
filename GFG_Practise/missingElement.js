// You are given an array arr[] of size n - 1 that contains distinct integers in the range from 1 to n (inclusive). This array represents a permutation of the integers from 1 to n with one element missing. Your task is to identify and return the missing element.
// Examples:
// Input: arr[] = [1, 2, 3, 5]
// Output: 4
// Explanation: All the numbers from 1 to 5 are present except 4.

function findMissingElement(arr){
let previousValue = 0;
let n = arr.length + 1;
let expectedSum = n * (n + 1) / 2;
console.log(expectedSum);


for(let i = 0; i < arr.length; i++){
 previousValue = previousValue + arr[i]
 //console.log(previousValue);
  
}
console.log(previousValue);
 return expectedSum - previousValue;

}
console.log(findMissingElement([1,2,3,4,6,7,8,9]));