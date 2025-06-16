// Problem 1  : Print Object Keys
// const student = { name: "Aditya", age: 25, course: "B.Tech" };
// for(let key in student){
//    // console.log(key)
//    console.log(`${key}: ${student[key]}`)


// }

// Problems 2 : Print Keys and Values
// const car = { brand: "Toyota", model: "Camry", year: 2022 };
// for(let key in car){
// //console.log(`${key}: ${car[key]}`)
// console.log(key)
// }

// Write a program to count the total number of properties in the object using a for...in loop.
// const student = { name: "Aditya", age: 25, course: "B.Tech" };
// const propertiesLength = Object.keys(student).length;
// console.log(`The total number of properties in the given object are :: ${propertiesLength}`)

// Filter Own Properties
// Using for...in loop and hasOwnProperty, print only the object's own properties
const person = Object.create({ gender: "Male" });
person.name = "Alex";
person.age = 30;
for(let key in person){
  if(person.hasOwnProperty(key))
   
  console.log(key)
}



