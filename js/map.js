import {
  similarAds
} from './main.js';

const LAT_TOKYO = 35.68950;
const LNG_TOKYO = 139.69171;

const adForm = document.querySelector('.ad-form');
adForm.classList.add('ad-form--disabled');
const adFormFieldsetArray = adForm.children;
for (let i = 0; i < adFormFieldsetArray.length; i++) {
  adFormFieldsetArray[i].setAttribute('disabled', 'disabled');
}

const mapFilters = document.querySelector('.map__filters');
mapFilters.classList.add('ad-form--disabled');
const mapFiltersFieldsetArray = mapFilters.children;
for (let i = 0; i < mapFiltersFieldsetArray.length; i++) {
  mapFiltersFieldsetArray[i].setAttribute('disabled', 'disabled');
}

const map = L.map('map-canvas')
  .on('load', () => {
    adForm.classList.remove('ad-form--disabled');
    for (let i = 0; i < adFormFieldsetArray.length; i++) {
      adFormFieldsetArray[i].removeAttribute('disabled', 'disabled');
    }
    mapFilters.classList.remove('ad-form--disabled');
    for (let i = 0; i < mapFiltersFieldsetArray.length; i++) {
      mapFiltersFieldsetArray[i].removeAttribute('disabled', 'disabled');
    }
  })
  .setView({
    lat: LAT_TOKYO,
    lng: LNG_TOKYO,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [0, 0],
});

const mainPinMarker = L.marker({
  lat: LAT_TOKYO,
  lng: LNG_TOKYO,
}, {
  draggable: true,
  icon: mainPinIcon,
});

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const actualCoordinate = evt.target.getLatLng();
});

const coordinateAdress = document.getElementById('address');
coordinateAdress.value = actualCoordinate;
// console.log(coordinateAdress.value);
