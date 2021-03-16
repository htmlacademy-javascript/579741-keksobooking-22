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
} from './message.js';
import {
  sendData
} from './api.js';

const coordinateAdress = document.querySelector('#address');
const adForm = document.querySelector('.ad-form');
const adFormFieldsetArray = adForm.children;
const SEND_DATA_URL = 'https://22.javascript.pages.academy/keksobooking';

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

const onFormSubmitSuccess = () => {
  createMessage('success');
  adForm.reset();
  setAddressValue(LAT_TOKYO, LNG_TOKYO);
};
const onFormSubmitError = () => {
  createMessage('error');
};


adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  sendData(SEND_DATA_URL,formData,onFormSubmitSuccess,onFormSubmitError);
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
