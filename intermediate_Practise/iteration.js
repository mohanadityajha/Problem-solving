//const arr = [0,4,6,3,10,5,7,9,8,2]
// const arr1 = []

// const result = arr.filter(function(value,index,arr){

//  if(arr[index]  === index){

    
//      arr1.push(index)
//     return arr[index];
//      }
 
// })

// console.log(result)
// console.log(arr1)

// const result = arr.filter(function(value,index,arr){

// return value % 2 !== 0
// })
// console.log(result)



// function myFunctionSum(arr){
// let len = arr.length
// prevoiusValue = 0;
// for(let i = 0; i < len; i++){

//     prevoiusValue = prevoiusValue + arr[i]
// }
// return prevoiusValue;
// }
// console.log(myFunctionSum([1,2,3,4,5,6,7,8,9,10])); // 55


const arr = [1,2,3,4,5,6,]

const result = arr.reduce(function(acc,val){
 acc = acc * val 
return acc;
})
console.log(result)



