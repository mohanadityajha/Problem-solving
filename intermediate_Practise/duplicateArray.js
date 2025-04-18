// Writa a  duplicate program in array

function removeDuplicateElementArray(a) {
  let b = [];
  let len = a.length;
  for (let i = 0; i < len; i++) {

    if (b.indexOf(a[i]) === -1 ) {
        b.push(a[i])
     }
   }

  return b;
}
console.log(removeDuplicateElementArray([1,1,1,1,1,2,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,10]))