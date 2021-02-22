const card = document.querySelector('#card');

const mapTypeToHeader = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
}

const createCard = (data) => {
  const cloneCard = card.cloneNode(true).content.querySelector('.popup')
  if (data.offer.title === '') {
    cloneCard.querySelector('.popup__title').style.display = 'none';
  } else {
    cloneCard.querySelector('.popup__title').textContent = data.offer.title;
  }

  if (data.offer.address === '') {
    cloneCard.querySelector('.popup__text--address').style.display = 'none';
  } else {
    cloneCard.querySelector('.popup__text--address').textContent = data.offer.address;
  }

  if (data.offer.price === '') {
    cloneCard.querySelector('.popup__text--price').style.display = 'none';
  } else {
    cloneCard.querySelector('.popup__text--price').textContent = `${data.offer.price} ₽/ночь`;
  }

  if (data.offer.type === '') {
    cloneCard.querySelector('.popup__type').style.display = 'none';
  } else {
    cloneCard.querySelector('.popup__type').textContent = mapTypeToHeader[data.offer.type];
  }

  if (data.offer.rooms === '' && data.offer.guests === '') {
    cloneCard.querySelector('.popup__text--capacity').style.display = 'none';
  } else {
    cloneCard.querySelector('.popup__text--capacity').textContent = `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`;
  }

  if (data.offer.checkin === '' && data.offer.checkout === '') {
    cloneCard.querySelector('.popup__text--time').style.display = 'none';
  } else {
    cloneCard.querySelector('.popup__text--time').textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;
  }

  if (data.offer.features.length === 0) {
    cloneCard.querySelector('.popup__features').style.display = 'none';
  } else {
    const featuresContainer = cloneCard.querySelector('.popup__features');
    featuresContainer.innerHTML = '';
    for (let i = 0; i < data.offer.features.length; i++) {
      const itemFeature = document.createElement('li');
      itemFeature.classList.add('popup__feature');
      itemFeature.classList.add(`popup__feature--${data.offer.features[i]}`);
      featuresContainer.appendChild(itemFeature);
    }
  }


  if (data.offer.description === '') {
    cloneCard.querySelector('.popup__description').style.display = 'none';
  } else {
    cloneCard.querySelector('.popup__description').textContent = data.offer.description;
  }

  if (data.offer.photos.length === 0) {
    cloneCard.querySelector('.popup__photos').style.display = 'none';
  } else {
    const photosContainer = cloneCard.querySelector('.popup__photos');
    for (let i = 0; i < data.offer.photos.length; i++) {
      const newPhoto = document.createElement('img');
      newPhoto.src = data.offer.photos[i];
      photosContainer.appendChild(newPhoto);
    }
  }

  if (data.author.avatar === '') {
    cloneCard.querySelector('.popup__avatar').style.display = 'none';
  } else {
    cloneCard.querySelector('.popup__avatar').src = data.author.avatar;
  }

  return cloneCard;
}

export {
  createCard
};
