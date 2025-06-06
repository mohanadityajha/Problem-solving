//JavaScript Array forEach()
// const numbers = [45, 4, 9, 16, 25];
// const res = numbers.forEach(function(value,index,arr){

//     console.log(value);
// })

// console.log(res)


// const numbers = [45, 4, 9, 16, 25];

// const res = numbers.forEach(function(value, index, arr) {
//     console.log(value);  // Logs each value
// });

// console.log(res);  // Logs: undefined


// JavaScript Array map()
// const numbers1 = [45, 4, 9, 16, 25];
// const res = numbers1.map(function(value,index,arr){

//     return value * 2
// })
// console.log(res)

//JavaScript Array filter()
// const numbers = [45, 4, 9, 16, 25];
// const res = numbers.filter(function(value,index,arr){


//     return value > 10;
// })
// console.log(res);

// JavaScript Array reduce()
// const numbers = [45, 4, 9, 16, 25];
// const res = numbers.reduce(function(acc,value,index,arr){

//     return acc + value;
// })
// console.log(res);

// JavaScript Array every()
// const numbers = [45, 4, 9, 16, 25];
// const res = numbers.every(function(value,index,arr){

//     return value > 10
// })
// console.log(res);

// JavaScript Array some()
// const numbers = [45, 4, 9, 16, 25];
// const res = numbers.some(function(value,index,arr){

//     return value > 10
// })
// console.log(res)

// JavaScript Array Spread (...)
arr1 = [1,2,3];
arr2 = [4,5,6];
arr3 = [7,8,9]
const res = [...arr1,...arr2,...arr3]
console.log(res);
