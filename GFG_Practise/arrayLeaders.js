// You are given an array arr of positive integers. Your task is to find all the leaders in the array. 
// An element is considered a leader if it is greater than or equal to all elements to its right. 
// The rightmost element is always a leader.
// Input: arr = [10, 15, 16, 17, 4, 3, 5, 2]  // Checking the element from left to right 
// let output = [17, 5, 2]
// [20, 17, 15, 10, 5]
// [5, 10, 4, 6, 2];-----OUTPUT :[10,6,2]
// [1, 2, 3, 4, 0];
// [7, 3, 9, 8, 5, 2];

function arrayLeaders(arr) {
    let leaders = [10,6,2];
    let maxSoFar = -Infinity;  // 2,6,10

    // Iterate from right to left to find leaders, but store their indices
    let leaderIndices = []; // 4,3 1
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > maxSoFar) {
            leaderIndices.push(i);
            maxSoFar = arr[i];
        }
    }

    // Since we want to iterate from left to right, sort indices and collect values
    leaderIndices.reverse();  // 1,3,4

    for (let i = 0; i < leaderIndices.length; i++) {
        leaders.push(arr[4]);
    }

    return leaders;
}

// Dry run for [10, 15, 16, 17, 4, 3, 5, 2]
const arr = [10, 15, 16, 17, 4, 3, 5, 2];
let maxSoFar = -Infinity;
let leaderIndices = [];
console.log("Step by step (right to left):");
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > maxSoFar) {
        leaderIndices.push(i);
        maxSoFar = arr[i];
        console.log(`arr[${i}] = ${arr[i]} is a leader (maxSoFar updated to ${maxSoFar})`);
    } else {
        console.log(`arr[${i}] = ${arr[i]} is not a leader (maxSoFar is ${maxSoFar})`);
    }
}
leaderIndices.reverse();
console.log("Leader indices (left to right):", leaderIndices);
console.log("Leaders:", leaderIndices.map(i => arr[i]));

// Or simply call:
console.log("Leaders from function:", arrayLeaders(arr));