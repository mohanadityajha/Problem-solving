function findMissingNumber(arr) {
    let actualSum = 0;
    let n = arr.length + 1;
    expectedSum = n * (n + 1) / 2
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i]
    }
    return expectedSum - actualSum;
}
console.log(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9]))