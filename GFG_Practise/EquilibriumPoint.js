// Given an array of integers arr[], the task is to find the first equilibrium point in the array.
// The equilibrium point in an array is an index (0-based indexing) such that the sum of all elements
//  before that index is the same as the sum of elements after it. Return -1 if no such point exists. 
// Input: arr[] = [1, 2, 0, 3]
const arr = [1, 2, 0, 3];

function findEquilibriumPoint(arr) {
    let totalSum = 0;

    // First pass: calculate total sum
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
    }
       let leftSum = 0;

    // Second pass: find equilibrium index
    for (let i = 0; i < arr.length; i++) {
        let rightSum = totalSum - leftSum - arr[i];

        if (leftSum === rightSum) {
            return i;  // equilibrium index found
        }
          leftSum += arr[i];
    }
      return -1;  // no equilibrium index
}
console.log(findEquilibriumPoint(arr));  // Output: 2




