// <<< ----------------- EXAMPLE ----------------->>>

// doStuffWithBook({
//   title: "Последнее королевство",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   public: true,
// });
// // Это можно сделать в теле функции.
// function doStuffWithBook(book) {
//   const { title, numberOfPages, downloads, rating, public } = book;
//   console.log(title);
//   console.log(numberOfPages);
//   console.log(downloads);
//   console.log(rating);
//   console.log(public);
//   // И так далее
// }
// // Или в сигнатуре (подписи), разницы нет.
// function doStuffWithBook({ title, numberOfPages, downloads, rating, public }) {
//   console.log(title);
//   console.log(numberOfPages);
//   // И так далее
// }

// <<<----------------- TASK - ЗАДАЧА. ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТА - ПАТТЕРН «ОБЪЕКТ НАСТРОЕК» ----------------->>

function calculateMeanTemperature(forecast) {
  //   const todayLow = forecast.today.low;
  //   const todayHigh = forecast.today.high;
  //   const tomorrowLow = forecast.tomorrow.low;
  //   const tomorrowHigh = forecast.tomorrow.high;

  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;
  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
console.log(
  calculateMeanTemperature({
    today: { low: 28, high: 32 },
    tomorrow: { low: 25, high: 29 },
  })
);
console.log(
  calculateMeanTemperature({
    today: { low: 37, high: 40 },
    tomorrow: { low: 33, high: 38 },
  })
);
