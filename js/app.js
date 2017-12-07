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
        {color: '#000'},
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
  zoom: 13,
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
  {title: 'Temple of Jupiter', location: {lat: 41.2907741,lng: 13.2601077}},
  {title: "Terracina", location: {lat: 41.2841265,lng: 13.2467785}},
  {title: 'Capo Fiume', location: {lat: 41.781229,lng: 13.4105518}},
  {title: 'Dal Patricano', location: {lat: 41.574439,lng: 13.269065}},
  {title: 'Valle dei Lepini', location: {lat: 41.5929749,lng: 13.2830475}},
  {title: 'La Torretta', location: {lat: 41.593569,lng: 13.251473}},
  {title: 'Zambardino', location: {lat: 41.5741811,lng: 13.3233213}},
  {title: 'La Mola', location: {lat: 41.6405164,lng: 13.2077839}},
  {title: 'La Scifa', location: {lat: 41.6459897,lng: 13.3519947}},
  {title: 'La Cometa', location: {lat: 41.647915,lng: 13.3367828}},
  {title: 'Pizzeria Brunella', location: {lat: 41.6520719,lng: 13.3412584}},
  {title: 'Le Migliori Pizza alla Pala', location: {lat: 41.611247,lng: 13.228897}},
  // {title: 'La Terrazza', location: {lat: ,lng:}},
  {title: 'La Passeggiata', location: {lat: 41.5916799,lng: 13.2427548}},
  {title: 'Ricordi Lievitati', location: {lat: 41.590483,lng: 13.241865}},
];

var largeInfowindow = new google.maps.InfoWindow();
//new latlng bounds instance capturing SW and NE corners of viewport
var bounds = new google.maps.LatLngBounds();

//style the markers.
var defaultIcon = makeMarkerIcon('009933');
//highlight marker when mouse over
var highlightedIcon = makeMarkerIcon('e60000');

//uses location array to create an array of markers on Initialize
for (var i = 0; i < locations.length; i++) {
  //get position from the location array
  var position = locations[i].location;
  var title = locations[i].title;
  //create a marker for location
  var marker = new google.maps.Marker({
    map: map,
    position: position,
    title: title,
    animation: google.maps.Animation.DROP,
    icon: defaultIcon,
    id: i
  });
  //push marker to array of markers
  markers.push(marker);
  // //create an onclick event to open the large InfoWindow
  marker.addListener('click', function(){
    populateInfoWindow(this, largeInfowindow);
  });
  //extend bounds for every maker we make
  bounds.extend(markers[i].position);

  //add two event listeners , one for mouseover and one
  // for mouseout to change the colors
  marker.addListener('mouseover', function(){
    this.setIcon(highlightedIcon);
  });
  marker.addListener('mouseout', function(){
    this.setIcon(defaultIcon);
  });
 }
 //tell map to fit itself to those bounds
 map.fitBounds(bounds);
}

// // function to populate the infowindow when marker is clicked.
function populateInfoWindow(marker, infowindow) {
  //check to see if infowindow is already open
  if(infowindow.marker !=marker) {
    //clear the infowindow content allowing streetview to load
    infowindow.marker = marker;
    infowindow.setContent('');
    //see if the marker property is cleared if infowindow is closed
    infowindow.addListener('closeclick', function() {
      infowindow.marker = null;
    });
    //create new streetViewService instance
    var streetViewService = new google.maps.StreetViewService();
    var radius = 50;
    //if the status is OK a pano was found, get position of streetview
    //image and calculate the heading, then get the panorama from that
    //then set the options
    function getStreetView(data, status) {
      if (status == google.maps.StreetViewStatus.OK) {
        var nearStreetViewLocation = data.location.latLng;
        var heading = google.maps.geometry.spherical.computeHeading(
          nearStreetViewLocation, marker.position);
          infowindow.setContent('<div>' + marker.title + '</div><div id = "pano"></div>');
          var panoramaOptions = {
            position: nearStreetViewLocation,
            pov: {
              heading: heading,
              pitch: 30
            }
          };
          var panorama = new google.maps.StreetViewPanorama(
            document.getElementById('pano'), panoramaOptions);
      } else {
        infowindow.setContent('<div>' + marker.title + '</div>' +
          '<div>No Street View Found </div>');
      }
    }
    //use streetview service to get closest streetview image
    //50 metres of the markers position
    streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
    //open the infowindow on the proper marker
    infowindow.open(map, marker);
  }
}

// //create markers
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
