// Given an array arr[] of integers, find all the elements that occur more than once in the array. 
// If no element repeats, return an empty array.
// Input: arr[] = [2, 3, 1, 2, 3]
// Output: [2, 3] 
// Explanation: 2 and 3 occur more than once in the given array.


// student = {}
// const elementCount = {
//     "2": 1,
// };



// student["name"] = "Adiyyua"
 elementCount[num] = 1;
// student["age"] = 30
// student["grade"] = "A"

// console.log(student);

function arrayDuplicate(arr){
 // arr = [5, 6, 6, 10, 9, 9, 5, 9, 10]  // 5, 6, 9,10
                
    const frqObj = {}; // {"5":2, "6":2, "10":2, "9":3, }
    const duplicates = [];

    for (const num of arr) {
        if (frqObj[num] != undefined) {
            frqObj[num]++;
        } else {
            frqObj[num] = 1;
        }
    }

    for (const key in frqObj) {
        if (frqObj[key] > 1) {
            duplicates.push(Number(key));
        }
    }

    return duplicates;  [5,6,10,9]
}