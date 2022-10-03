// Сервису гравировки украшений нужна функция, которая бы автоматически
// считала цену гравировки, в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord).
// Эта функция принимает строку, состоящую из слов разделённых только
// пробелами(параметр message) и цену гравировки одного слова
// (параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов
// в строке.
// Объявлена функция calculateEngravingPrice(message, pricePerWord)
// Вызов calculateEngravingPrice("JavaScript is in my blood", 10) возвращает 50
// Вызов calculateEngravingPrice("JavaScript is in my blood", 20) возвращает 100
// Вызов calculateEngravingPrice("Web-development is creative work", 40) возвращает 160
// Вызов calculateEngravingPrice("Web-development is creative work", 20) возвращает 80

function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
  let price = message.split(" ").length * pricePerWord;
  return price;
  // Change code above this line
}
console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
console.log(calculateEngravingPrice("Web-development is creative work", 40));
console.log(calculateEngravingPrice("Web-development is creative work", 20));

// 1. сделать из строки массив message.split
// 2. узнать кол - во индексов в массиве message.length - 1
// 3. произведение п.1 и п.2 дает искомый результат

// let message = "JavaScript is in my blood";
// message = message.split(" ");
// const price = message.split(" ").length * 10;
// console.log(price);
