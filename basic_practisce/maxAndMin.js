// Find max  and Min element of the Array ?
arr = [2, 4, 6, 8, 10, 18, 26, 1] // 26




function findMaxMinElement(arr) {
  // let formula = Math.max(26, 10,-9,18,10,1,3.6,8,30)
  let maxValue = Math.max(...arr);
  let minValue = Math.min(...arr)
  console.log(maxValue, minValue)
  
  return { maxValue, minValue };
}
console.log(findMaxMinElement([2, 4, 6, 8, 10, 18, 26, 1]))