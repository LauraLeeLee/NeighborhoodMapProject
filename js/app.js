var map;

//create new blank array for location hideMarkers
var markers = [];

//create placemarkers array to use in many functions to have control
//over the number of places that show.
var placeMarkers = [];

//initial map
function initMap() {
  //creeat a styles array to use with map
  var styles = [
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
];

//constructor creates new map
map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 41.5916799,lng: 13.2427548},
  zoom: 3,
  styles: styles,
  mapTypeControl: false
});

//POI locations
var locations = [
  {title: 'Monte Cassino', location: {lat: 41.4903315,lng: 13.8133865}},
  {title: 'Abbazia di Casamari', location: {lat: 41.6712011,lng: 13.4871188}},
  {title: 'Grotte di Pastena', location: {lat: 41.4965448,lng: 13.490696}},
  {title: 'Certosa di Trisulti', location: {lat: 41.77965289999999,lng: 13.3972988}},
  {title: 'Santuario di Vallepietra', location: {lat: 41.9563957,lng: 13.2311503}},
  {title: 'Monte Cacume', location: {lat: 41.5666667,lng: 13.2333333}},
  {title: 'Grotte di Collepardo', location: {lat: 41.7583057,lng: 13.3647073}},
  {title: 'Temple of Jupiter', location: {lat: 41.89239,lng: 12.4821978}},
  {title: "Terracina", location: {lat: 41.2841265,lng: 13.2467785}},
  {title: 'Capo Fiume', location: {lat: 41.781229,lng: 13.4105518}},
  {title: 'Dal Patricano', location: {lat: 41.574439,lng: 13.269065}},
  {title: 'Valle dei Lepini', location: {lat: 41.5929749,lng: 13.2830475}},
  {title: 'La Torretta', location: {lat: 41.593569,lng: 13.251473}},
  {title: 'Zambardino', location: {lat: 41.5741811,lng: 13.3233213}},
  // {title: , location: {lat: ,lng:}},
  // {title: , location: {lat: ,lng:}},
  // {title: , location: {lat: ,lng:}},
  // {title: , location: {lat: ,lng:}},
  // {title: , location: {lat: ,lng:}},
];

var largeInfowindow = new google.maps.InfoWindow();

//style the markers.
var defaultIcon = makeMarkerIcon('#009933');

//highlight marker when mouse over
var highlightedIcon = makeMarkerIcon('#e60000');

}

//create markers
function makeMarkerIcon(markerColor) {
  var markerImage = new google.maps.MarkerImage(
    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
    '|40|_|%E2%80%A2',
    new google.maps.Size(20, 35),
    new google.maps.Point(0, 0),
    new google.maps.Point(10, 35),
    new google.maps.Size(20,35));
  return markerImage;
}
