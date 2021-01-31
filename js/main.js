//Ссылка на источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomNumber = function (min , max) {
  if (max <= min || max <= 0 || min <= 0) {
    throw new Error('Введите другой диапазон')
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNumber(1,5);

const getRandomFloatNumber = function (min , max, digits) {
  if (max <= min || max <= 0 || min <= 0) {
    throw new Error('Введите другой диапазон')
  }

  return (Math.random() * (max - min) + min).toFixed(digits)
}
getRandomFloatNumber(1.2,1.25,3);
