

import { mapFilters, data, drawPin, markersDb} from './map.js';

const housingTypeInput = mapFilters.querySelector('#housing-type');
const housingPriceInput = mapFilters.querySelector('#housing-price');
const housingRoomsInput = mapFilters.querySelector('#housing-rooms');
const housingGuestsInput = mapFilters.querySelector('#housing-guests');
const showFiltredAds = () => {
  markersDb.forEach(marker => marker.remove());
  const filteredAds = toFilterAds();
  drawPin(filteredAds);
};

const filterState = {
  type: 'any',
  price: 'any',
  rooms: 'any',
  guests: 'any',
}

const toFilterAds = () => {
  return data.filter(function(ads) {
    if (ads.offer.type === filterState.type){
      return ads;
    }
    if (filterState.type === 'any'){
      return ads;
    }
  })
    .filter(function(ads) {

      if ( filterState.price === 'any'){
        return ads
      }

      if ( filterState.price === 'low'){
        if(ads.offer.price <= 10000){
          return ads
        }
      }

      if ( filterState.price === 'middle'){
        if(ads.offer.price >= 10000 && ads.offer.price <= 50000){
          return ads
        }
      }

      if ( filterState.price === 'high'){
        if(ads.offer.price >= 50000){
          return ads
        }
      }
    })

    .filter(function(ads) {

      if (ads.offer.rooms === +(filterState.rooms)){
        return ads;
      }

      if (filterState.rooms === 'any'){
        return ads;
      }
    })

    .filter(function(ads) {
      if (ads.offer.guests === +(filterState.guests)){
        return ads;
      }
      if (filterState.guests === 'any'){
        return ads;
      }
    });
}


housingTypeInput.addEventListener('change', () => {
  const housingTypeValue = housingTypeInput.options[housingTypeInput.selectedIndex].value;
  filterState.type = housingTypeValue;

  showFiltredAds();
});



housingPriceInput.addEventListener('change', () => {
  const housingPriceValue = housingPriceInput.options[housingPriceInput.selectedIndex].value;
  filterState.price = housingPriceValue;

  showFiltredAds();
});




housingRoomsInput.addEventListener('change', () => {
  const housingPriceValue = housingRoomsInput.options[housingRoomsInput.selectedIndex].value;
  filterState.rooms = housingPriceValue;

  showFiltredAds();
});




housingGuestsInput.addEventListener('change', () => {
  const housingPriceValue = housingRoomsInput.options[housingGuestsInput.selectedIndex].value;
  filterState.guests = housingPriceValue;

  showFiltredAds();
});
