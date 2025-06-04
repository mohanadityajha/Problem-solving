// Sorting an Array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const res = fruits.sort();
// console.log(res);

// Reversing an Array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const res = fruits.reverse();
// console.log(res);

// By combining sort() and reverse()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const res = fruits.sort();
// const result = fruits.reverse();
// console.log(res,result )

// Numeric Sort ---Assending Order
// const points = [40, 100, 1, 5, 25, 10];
// const res = points.sort(function(a,b){

//  return a - b 
// })

// console.log(res);

// Numeric Sort ---Dessending Order
// const points = [40, 100, 1, 5, 25, 10];
// const res = points.sort(function(a,b){

//     return b -a 
// })
// console.log(res)

// Sorting an Array in Random Order
const points = [40, 100, 1, 5, 25, 10];
const res = points.sort(function(a,b){

    return 0.5 -Math.random();
})
console.log(res)