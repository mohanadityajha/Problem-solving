// JavaScript Array indexOf()
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// const res = fruits.indexOf("Mango")
// console.log(res);

// JavaScript Array lastIndexOf()
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// const res = fruits.lastIndexOf("Apple") + 1
// console.log(res);

// JavaScript Array includes()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const res = fruits.includes("Mango")
// console.log(res);

// JavaScript Array find()
const numbers = [4, 9, 16, 25, 29];
const res = numbers.find(function(value,index,arr){

    return value > 20
})
console.log(res);