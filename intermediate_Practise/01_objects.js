// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// Create an Array
//const myArray = Object.values(person);
// console.log(myArray);

//const myArray2 = Object.keys(person);
//console.log(myArray2);


// The Object.entries() Method
//const fruits = {Bananas:300, Oranges:200, Apples:500}; 

// let text = "";
// for (let [fruit, amount] of Object.entries(fruits)) {
//   text += fruit + ": " + amount + "<br>";
// }
// console.log(text);


function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// const student = {
//  firstName: "Aditya",
//  lastName: "Mohan",
//  age : 18,
//  eyeColor : "Blue"
// };
// console.log(student);

// const employee ={

//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     eyeColor: "Brown"

// }
// console.log(employee);

const student = new Person("Aditya", "Mohan", 18, "Blue");
const employee = new Person("John", "Doe", 30, "Brown");
console.log(student);
console.log(employee);