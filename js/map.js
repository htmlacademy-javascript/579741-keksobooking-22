/* global L:readonly */

import {
  createAds
} from './data.js';
import {
  createCard
} from './card.js';
import {
  setAddressValue
} from './form.js';
import {
  disableFormElements
} from './util.js';
import {
  activateForm
} from './form.js';
import {
  enableFormElements
} from './util.js';

const ADS_COUNT = 10;
const LAT_TOKYO = 35.68950;
const LNG_TOKYO = 139.69171;


const mapFilters = document.querySelector('.map__filters');
const mapFiltersFieldsetArray = mapFilters.children;

disableFormElements(mapFiltersFieldsetArray);


const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
    enableFormElements(mapFiltersFieldsetArray);
  })
  .setView({
    lat: LAT_TOKYO,
    lng: LNG_TOKYO,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
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
  const {
    lat,
    lng,
  } = evt.target.getLatLng();

  setAddressValue(lat.toFixed(5),lng.toFixed(5));
});


setAddressValue(LAT_TOKYO, LNG_TOKYO);


const similarAds = createAds(ADS_COUNT);
similarAds.forEach((similarAd) => {
  const pinIcon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker({
    lat: similarAd.offer.location.x,
    lng: similarAd.offer.location.y,
  }, {
    icon: pinIcon,
  });

  marker
    .addTo(map)
    .bindPopup(
      createCard(similarAd),
    );
});

