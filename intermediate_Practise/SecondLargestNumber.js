// Find the second largest number in the array ?
// arr = [2, 3, 5, 7, 9, 8, 6, 4, 2, 1] // 8
// let result = arr.sort(function (a, b) {
//   return b - a
//  })
//  console.log(result)


function secondLargestNumber(arr) {
  let len = arr.length - 2 
  let result = arr.sort(function (a,b) { 
    return a - b;
   

  })
  return result [len] ;

}
console.log(secondLargestNumber([2, 3, 5, 7, 9, 8, 6, 4, 2, 1]))