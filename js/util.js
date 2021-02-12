const getRandomNumber = (min, max) => {
  if (max <= min || max <= 0 || min < 0) {
    throw new Error('Вcе числа должны быть положительными');
  }
  if (typeof min === 'undefined' || typeof max === 'undefined') {
    throw new Error('Введите все параметры');
  }
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('Введенные параметры должны быть цифрой');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomFloatNumber = (min, max, digits) => {
  if (max <= min || max <= 0 || min <= 0 || digits <= 0) {
    throw new Error('Вcе числа должны быть положительными');
  }
  if (typeof min == 'undefined' || typeof max == 'undefined' || typeof digits == 'undefined') {
    throw new Error('Введите все параметры');
  }
  if (typeof min !== 'number' || typeof max !== 'number' || typeof digits !== 'number') {
    throw new Error('Введенные параметры должны быть цифрой');
  }

  return +((Math.random() * (max - min) + min).toFixed(digits));
}

export {
  getRandomNumber,
  getRandomFloatNumber
};
