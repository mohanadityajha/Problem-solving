// 1 What is the output of 5 + 2?
console.log(5+2)

// 2 What is the remainder of 10 % 3?
console.log(10 % 3)

//3 What’s the difference between ++a and a++?
let a = 5;
console.log(++a); // Pre-increment: increments a before using it, so it outputs 6
console.log(a++); // Post-increment: outputs a (6) then increments it, so next time a will be 7

// 4 Predict output: let a = 10; console.log(++a) vs console.log(a++);



//5. What is the output of: 2 + "2"?
console.log(2 + "2"); // Outputs "22" because the number is coerced to a string and concatenated

// 6 What happens when you do "10" - 5?
// console.log("10" - 5); 
// Outputs 5 because the string "10" is coerced to a number before subtraction

// 7 What will be the result of 2 * "abc"?
console.log(2 * "abc");     // Outputs NaN (Not a Number) because "abc" cannot be coerced to a number

// 8 What is the difference between / and %?
// / is the division operator, which divides one number by another and returns a quotient.
// % is the modulus operator, which returns the remainder of a division operation.