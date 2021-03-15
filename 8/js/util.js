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

const getRandomArrayElement = (array) => {
  return array[getRandomNumber(0, array.length - 1)];
}

const createRandomArrayFromArray = (array) => {
  const result = [];
  for (let i = 0; i < getRandomNumber(1, array.length); i++) {
    result.push(array[i]);
  }
  return result;
}

const enableFormElements = (elements) =>{
  for (let i = 0; i < elements.length; i++) {
    elements[i].removeAttribute('disabled', 'disabled');
  }
}

const disableFormElements = (elements) =>{
  for (let i = 0; i < elements.length; i++) {
    elements[i].setAttribute('disabled', 'disabled');
  }
}


export {
  getRandomNumber,
  getRandomFloatNumber,
  getRandomArrayElement,
  createRandomArrayFromArray,
  disableFormElements,
  enableFormElements
};
