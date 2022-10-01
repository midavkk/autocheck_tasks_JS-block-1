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
    // const lastElementIndex = array.length - 1;
    return [array[0]]
  // Change code above this line
}

console.log(getExtremeElements([1, 2, 3, 4, 5]));
