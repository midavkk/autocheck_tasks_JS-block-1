// Напиши функцию getExtremeElements(array) которая принимает один параметр
// array - массив элементов произвольной длины.Функция должна возвращать
// массив из двух элементов - первого и последнего элемента параметра array.
// 1. Объявлена функция getExtremeElements(array)
// 2. Вызов getExtremeElements([1, 2, 3, 4, 5]) возвращает [1, 5]
// 3. Вызов getExtremeElements(["Earth", "Mars", "Venus"])
// возвращает["Earth", "Venus"]
// 4. Вызов getExtremeElements(["apple", "peach", "pear", "banana"])
// возвращает["apple", "banana"]

function getExtremeElements(array) {
  // Change code below this line
  const lastElement = array.length - 1;
  const getExtremeElements = [array[0], array[lastElement]];
  return getExtremeElements;
  // Change code above this line
}

console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// const array = [1, 2, 3, 4, 5];
// const firstElement = array[0];
// const lastElement = array.length;
// console.table(array);
// console.log(firstElement);
// console.log(lastElement)
