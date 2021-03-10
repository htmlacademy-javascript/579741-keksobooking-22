import {
  disableFormElements,
  enableFormElements
} from './util.js';
import {
  LAT_TOKYO,
  LNG_TOKYO
} from './map.js';
import {
  createMessage
} from './main.js';

const coordinateAdress = document.querySelector('#address');
const adForm = document.querySelector('.ad-form');
const adFormFieldsetArray = adForm.children;

coordinateAdress.setAttribute('readonly', 'true');

const deactivateForm = () => {
  adForm.classList.add('ad-form--disabled');
  disableFormElements(adFormFieldsetArray);
}

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  enableFormElements(adFormFieldsetArray);
}

const setAddressValue = (lat, lng) => {
  coordinateAdress.value = `${lat}, ${lng}`;
}

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
      'Content-Type': 'multipart/form-data',
    },
  )
    .then((response) => {
      if (response.ok) {
        createMessage('success');
        adForm.reset();
        setAddressValue(LAT_TOKYO, LNG_TOKYO);

      } else {
        createMessage('error');
      }
    })
    .catch(() => {
      createMessage('error')
    });
});


adForm.addEventListener('reset', () => {
  setTimeout(() => setAddressValue(LAT_TOKYO, LNG_TOKYO), 0)
})



export {
  coordinateAdress,
  adForm,
  adFormFieldsetArray,
  deactivateForm,
  activateForm,
  setAddressValue
};
