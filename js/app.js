var map;

//create new blank array for location hideMarkers
var markers = [];

//create placemarkers array to use in many functions to have control
//over the number of places that show.
var placeMarkers = [];

//initial map
function initMap() {
  //creeat a styles array to use with map
  var styles = {
   {
      featureType: 'water',
      stylers: [
        {color: '#99ceff'}
      ]
    }, {
      featureType: 'administrative',
      elementType: 'labels.text.stroke',
      stylers: [
        {color: '#ffffff'},
        {weight: 6}
      ]
    }, {
      featureType: 'administrative',
      elementType: 'labels.text.fill',
      stylers: [
        {color: '#e85113'}
      ]
    },{
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {color: '#efe9e4'},
        {lightness: -40}
      ]
    },{
      featureType: 'transit.station',
      stylers: [
        {weight: 9},
        {hue: '#e85113'}
      ]
    },{
      featureType: 'road.highway',
      elementType: 'labels.icon',
      stylers: [
        {visibility: 'on'}
      ]
    },{
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [
        {lightness: 100}
      ]
    },{
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {lightness: -100}
      ]
    },{
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {visibility: 'on'},
        {color: '#f0e4d3'}
      ]
    },{
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [
        {color: '#efe9e4'},
        {lightness: -25}
      ]
    }
};

//constructor creates new map
map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 41.5916799,lng: 13.2427548},
  zoom: 3,
  styles: styles,
  mapTypeControl: false
});
