import $ from 'jquery';
import './style/milligram.sass';

const MAPBOX_API_KEY = 'pk.eyJ1Ijoic2FkYnVtYmxlYmVlIiwiYSI6ImVCdE9rY28ifQ.iQDg2GpQ5YsZzn4b029Auw';

const imageVars = ['godliketrees_3_small.jpg', 'IMG_1089.JPG', 'IMG_1183.JPG', 'IMG_20160112_153355.jpg', 'IMG_20160113_152154.jpg', 'IMG_20160726_225855.jpg', 'IMG_20160820_181330.jpg', 'IMG_20160903_134359.jpg', 'IMG_20160917_140040.jpg', 'IMG_20160917_180158.jpg', 'IMG_20161211_162627.jpg', 'IMG_20170113_171342.jpg', 'IMG_20170120_092909.jpg', 'IMG_20170121_203511.jpg', 'IMG_20170225_144349.jpg', 'IMG_20170510_195050.jpg', 'IMG_20170922_191408.jpg', 'IMG_20171110_191000.jpg', 'IMG_20171111_014651.jpg', 'IMG_2477.JPG', 'IMG_2542.JPG', 'IMG_3007.JPG', 'IMG_3499.JPG', 'IMG_3505.JPG', 'IMG_3916.JPG', 'IMG_3976.JPG' ]
const targetDiv = document.getElementById('photo-wrapper');
var imageImgs = [];

var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-122.214203, 38.858212]
    },
    properties: {
      name: 'venue',
      title: 'Full Belly Farm',
      description: 'Ceremony & reception venue',
      url: 'https://www.google.com/maps/place/Full+Belly+Farm/@38.8574438,-122.2162575,17z/data=!3m1!4b1!4m5!3m4!1s0x80848facab6d258f:0xc357cf0fc40290da!8m2!3d38.8574438!4d-122.2140635',
      icon: 'park-11.svg'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-121.724251, 38.674514]
    },
    properties: {
      name: 'lodging',
      title: 'Fairfield Inn & Suites',
      description: 'Wedding hotel block',
      url: 'https://www.google.com/maps/place/Fairfield+Inn+%26+Suites+by+Marriott+Sacramento+Airport+Woodland/@38.6764941,-121.7283524,17.19z/data=!4m12!1m6!3m5!1s0x809ad5d61650d4b3:0xcc4e749e9e629f04!2sFairfield+Inn+%26+Suites+by+Marriott+Sacramento+Airport+Natomas!8m2!3d38.6155692!4d-121.5380487!3m4!1s0x8084d157241fc6b7:0x30e78dc920c0d462!8m2!3d38.674673!4d-121.724259',
      icon: 'lodging-11.svg'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-121.589732, 38.695764]
    },
    properties: {
      name: 'airport',
      title: 'Sacramento Airport',
      description: 'Recommended airport',
      url: 'https://www.google.com/maps/place/Sacramento+International+Airport/@38.6950854,-121.5922588,17z/data=!3m1!4b1!4m5!3m4!1s0x809b2b73ce6a70ad:0xa460901228ef4232!8m2!3d38.6950854!4d-121.5900648',
      icon: 'airport-11.svg'
    }
  }]
};

imageVars.forEach(function(image){
  imageImgs += "<div class='card'><img class='scroll-images' src='/images/album/" + image + "'></img></div>";
});

targetDiv.innerHTML = imageImgs;

// Our map
mapboxgl.accessToken = MAPBOX_API_KEY

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-121.900898, 38.759079],
  zoom: 9.5,
  pitchWithRotate: false,
  scrollZoom: false,
  dragRotate: false,
});

// add markers to map
geojson.features.forEach(function(marker) {
  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker ' + marker.properties.name;

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
  .setHTML('<h3>' + marker.properties.title + '</h3><a href="' + marker.properties.url + '" target="_blank"><p>' + marker.properties.description + '</p></a>'))
  .addTo(map);
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 150
    }, 500);
});
