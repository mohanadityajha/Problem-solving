// Find the product of array

//arr = [2, -2, -3, 1]; // 12

//productOfPerviousValue = 1


function findProductOfArr(arr) { 
  let len = arr.length - 1
  let productOfPerviousValue = 1
  
  for (let i = 0; i <= len; i++) {
    productOfPerviousValue = productOfPerviousValue * arr[i]

  }

  return productOfPerviousValue;

}
console.log(findProductOfArr([2, -2, -3, 1]))
console.log(findProductOfArr(["-5","2","-2","6","1"]))  //  120