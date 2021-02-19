import {
  similarAds
} from './data.js';


const card = document.querySelector('#card');
const mapTypeToHeader = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
}

const createCard = (offer) => {
  const cloneCard = card.cloneNode(true);
  cloneCard.querySelector('.popup__title').textContent = offer.title;
  cloneCard.querySelector('.popup__text--address').textContent = offer.address;
  cloneCard.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;

  cloneCard.querySelector('.popup__type').textContent = mapTypeToHeader[offer.type];
  cloneCard.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cloneCard.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  cloneCard.querySelector('.popup__features').textContent = offer.features;







}
