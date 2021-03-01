import {
  disableFormElements,
  enableFormElements
} from './util.js';

const coordinateAdress = document.querySelector('#address');
const adForm = document.querySelector('.ad-form');
const adFormFieldsetArray = adForm.children;

coordinateAdress.setAttribute('readonly', 'true');

const deactivateForm = () =>{
  adForm.classList.add('ad-form--disabled');
  disableFormElements(adFormFieldsetArray);
}

const activateForm = () =>{
  adForm.classList.remove('ad-form--disabled');
  enableFormElements(adFormFieldsetArray);
}

const setAddressValue = (lat, lng) => {
  coordinateAdress.value = `${lat}, ${lng}`;
}


export {
  coordinateAdress,
  adForm,
  adFormFieldsetArray,
  deactivateForm,
  activateForm,
  setAddressValue
};
