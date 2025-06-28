// Given an array of positive integers arr[], return the second largest element from the array. 
// If the second largest element doesn't exist then return -1.
//Note: The second largest element should not be equal to the largest element.

// Examples:
// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.


function secondLargest(arr) {
    let firstLargest = arr[0]  // 50
    let secondLargest = -Infinity;  // 40
    // i = 4
    for (let i = 1; i < arr.length; i++) {
             // 50 > 40
        if (arr[i] > firstLargest) {
            
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < firstLargest) {
    

            secondLargest = arr[i];
        }
    }      
    return secondLargest == -Infinity ? -1 : secondLargest;
}


function secondLargest(arr) {

    arr.sort(function(a, b) {
        return a - b;
    });

    // arr = [1, 1, 10, 12, 34, 35]
    let largest = arr[arr.length - 2]; 
    return largest; 
    }
   


console.log(secondLargest([12, 35, 1, 10, 34, 1]));
console.log(secondLargest([10, 5, 10, 20, 30, 40, 50]));
console.log(secondLargest([10, 20, 30, 40, 50]));
console.log(secondLargest([10, 10, 9, 10, 9]));
