//  <<<----------------- EXAMPLE ----------------->>>
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
//   console.log(color);
//   console.log(color.hex);
//   console.log(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);
// <<<----------------- TASK - ЗАДАЧА. КОЛЛЕКЦИЯ ЗНАЧЕНИЙ СВОЙСТВА ----------------->>

// <<<----------------- TASK - ЗАДАЧА. КОЛЛЕКЦИЯ ЗНАЧЕНИЙ СВОЙСТВА (решение через 2 for-of) ----------------->>
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];
function getAllPropValues(propName) {
  // Change code below this line
  const allPropValues = [];
  for (const product of products) {
    // console.log(product);
    const keys = Object.keys(product);
    // console.log(keys);
    for (const key of keys) {
      // console.log(key);
      if (key === propName) {
        allPropValues.push(product[key]);
      }
      console.log(allPropValues);
    }
  }
  return allPropValues;
  // Change code above this line
}
console.log(getAllPropValues("name"));
console.log(getAllPropValues("quantity"));
console.log(getAllPropValues("price"));
console.log(getAllPropValues("category"));
