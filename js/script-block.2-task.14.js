// Дополни код так, чтобы переменные содержали
//     частичные копии исходного массива fruits.
// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов
// 1. Объявлена переменная fruits
// 2. Значение переменной fruits это массив ["apple", "plum", "pear", "orange", "banana"]
// 3. Объявлена переменная firstTwoEls
// 3.1. Значение переменной firstTwoEls это массив ["apple", "plum"]
// 4. Объявлена переменная nonExtremeEls
// 4.1. Значение переменной nonExtremeEls это массив ["plum", "pear", "orange"]
// 5. Объявлена переменная lastThreeEls
// 5.1. Значение переменной lastThreeEls это массив ["pear", "orange", "banana"]
// 5.2. Переменной lastThreeEls присвоена копия части массива fruits после применения
//      метода slice с правильными аргументами

const fruits = ["apple", "plum", "pear", "orange", "banana"];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, 4);
const lastThreeEls = fruits.slice(-3);

console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);
