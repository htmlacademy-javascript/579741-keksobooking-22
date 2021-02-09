//Ссылка на источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
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
getRandomNumber(5, 10);

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
getRandomFloatNumber(1.2, 1.25, 5);

const types = ['palace', 'flat', 'house', 'bungalow'];
const times = ['12:00', '13:00', '14:00'];
const titles = ['Отель1', 'Отель2', 'Отель3', 'Отель4'];
const descriptions = ['Уютная комната', 'Лучший вариант на Ваши даты', 'Выгодное предложение', 'Отличное расположение'];

let allFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
let allPhotos = [
  'http: //o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http: //o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http: //o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const createSimilarAd = () => {

  let features = [];

  for (let i = 0; i < getRandomNumber(1, 6); i++) {
    features.push(allFeatures[i]);
  }

  let photos = [];
  for (let i = 0; i < getRandomNumber(1, 3); i++) {
    photos.push(allPhotos[i]);
  }

  const xCoord = getRandomFloatNumber(35.65000, 35.70000, 5);
  const yCoord = getRandomFloatNumber(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomNumber(1, 8) + '.png',
    },
    offer: {
      title: titles[getRandomNumber(0, titles.length - 1)],
      address: xCoord + ',' + yCoord,
      price: getRandomNumber(1, 1000000),
      type: types[getRandomNumber(0, types.length - 1)],
      rooms: getRandomNumber(1, 5),
      guests: getRandomNumber(1, 60),
      checkin: times[getRandomNumber(0, times.length - 1)],
      checkout: times[getRandomNumber(0, times.length - 1)],
      features: features,
      description: descriptions[getRandomNumber(0, descriptions.length - 1)],
      photos: photos,
      location: {
        x: xCoord,
        y: yCoord,
      },
    },
  };
};

let similarAds = [];

for (let i = 0; i < 10; i++) {
  similarAds.push(createSimilarAd());
}
