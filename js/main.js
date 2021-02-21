import {
  createSimilarAd
} from './data.js';
import {
  createCard
} from './card.js';

const ADS_COUNT = 10;
const similarAds = [];

for (let i = 0; i < ADS_COUNT; i++) {
  similarAds.push(createSimilarAd());
}


const card = createCard(similarAds[1]);

const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.appendChild(card);
