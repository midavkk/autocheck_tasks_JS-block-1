//  <<<----------------- EXAMPLE ----------------->>>

// function filterArray(numbers, value) {
//   // Change code below this line
//   let Array = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       Array.push(numbers[i]);
//     }
//     // Change code above this line
//   }
//   return Array;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

//  <<<----------------- TASK ----------------->>>

function countProps(object) {
  let propCount = 0;
  // Change code below this line
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
    // Change code above this line
  }
  return propCount;
}
console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
