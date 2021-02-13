import {
  getRandomNumber,
  getRandomFloatNumber
} from './util.js';

const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const TIMES = ['12:00', '13:00', '14:00'];
const TITLES = ['Отель1', 'Отель2', 'Отель3', 'Отель4'];
const DESCRIPTIONS = ['Уютная комната', 'Лучший вариант на Ваши даты', 'Выгодное предложение', 'Отличное расположение'];

const ALL_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const ALL_PHOTOS = [
  'http: //o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http: //o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http: //o0.github.io/assets/images/tokyo/hotel3.jpg',
];
const MIN_X_COORDINATE = 35.65000;
const MAX_X_COORDINATE = 35.70000;
const MIN_Y_COORDINATE = 139.70000;
const MAX_Y_COORDINATE = 139.80000;
const DIGITS_COORDINATE = 5;
const ADS_COUNT = 10;
const MIN_PRICE = 1;
const MAX_PRICE = 1000000;
const MIN_ROOMS = 1;
const MAX_ROOMS = 100;
const MIN_GUESTS = 1;
const MAX_GUESTS = 100;

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

const createSimilarAd = () => {

  const features = createRandomArrayFromArray(ALL_FEATURES);
  const photos = createRandomArrayFromArray(ALL_PHOTOS);
  const xCoord = getRandomFloatNumber(MIN_X_COORDINATE, MAX_X_COORDINATE, DIGITS_COORDINATE);
  const yCoord = getRandomFloatNumber(MIN_Y_COORDINATE, MAX_Y_COORDINATE, DIGITS_COORDINATE);

  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomNumber(1, 8) + '.png',
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: xCoord + ',' + yCoord,
      price: getRandomNumber(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomNumber(MIN_ROOMS, MAX_ROOMS),
      guests: getRandomNumber(MIN_GUESTS, MAX_GUESTS),
      checkin: getRandomArrayElement(TIMES),
      checkout: getRandomArrayElement(TIMES),
      features: features,
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: photos,
      location: {
        x: xCoord,
        y: yCoord,
      },
    },
  };
};

const similarAds = [];

for (let i = 0; i < ADS_COUNT; i++) {
  similarAds.push(createSimilarAd());
}

export {
  similarAds
};
