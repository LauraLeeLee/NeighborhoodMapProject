//global variables
var map;
var largeInfowindow;
var defaultIcon;
var highlightedIcon;
//create new blank array for location hideMarkers
var markers = [];
//create placemarkers array to use in many functions to have control
//over the number of places that show.
var placeMarkers = [];
// Error message if google maps isn't loading--onerror attr used in script in google src in index.html
function googleError() {
	var mapError = document.createElement('h2');
	mapError.setAttribute("id", "errorGoogle");
	mapError.innerHTML = "Google Maps is not loading. Please try again later";
	document.getElementsByClassName('container-fluid')[0].appendChild(mapError);
	alert("Google Maps is not loading");
}
//initialize map
function initMap() {
	//creeat a styles array to use with map
	var styles = [{
		featureType: 'water',
		stylers: [{
			color: '#99ceff'
		}]
	}, {
		featureType: 'administrative',
		elementType: 'labels.text.stroke',
		stylers: [{
			color: '#000'
		}, {
			weight: 6
		}]
	}, {
		featureType: 'administrative',
		elementType: 'labels.text.fill',
		stylers: [{
			color: '#e60000'
		}]
	}, {
		featureType: 'road.highway',
		elementType: 'geometry.stroke',
		stylers: [{
			color: '#efe9e4'
		}, {
			lightness: -40
		}]
	}, {
		featureType: 'transit.station',
		stylers: [{
			weight: 9
		}, {
			hue: '#e85113'
		}]
	}, {
		featureType: 'road.highway',
		elementType: 'labels.icon',
		stylers: [{
			visibility: 'on'
		}]
	}, {
		featureType: 'water',
		elementType: 'labels.text.stroke',
		stylers: [{
			lightness: 100
		}]
	}, {
		featureType: 'water',
		elementType: 'labels.text.fill',
		stylers: [{
			lightness: -100
		}]
	}, {
		featureType: 'poi',
		elementType: 'geometry',
		stylers: [{
			visibility: 'on'
		}, {
			color: '#f0e4d3'
		}]
	}, {
		featureType: 'road.highway',
		elementType: 'geometry.fill',
		stylers: [{
			color: '#efe9e4'
		}, {
			lightness: -25
		}]
	}];
	//constructor creates new map
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 41.5916799,
			lng: 13.2427548
		},
		zoom: 13,
		styles: styles,
		gestureHandling: 'greedy',
		mapTypeControl: false
	});
	largeInfowindow = new google.maps.InfoWindow();
	//new latlng bounds instance capturing SW and NE corners of viewport
	var bounds = new google.maps.LatLngBounds();
	//style the markers.
	defaultIcon = makeMarkerIcon('009933');
	//highlight marker when mouse over
	highlightedIcon = makeMarkerIcon('e60000');
	//uses location array to create an array of markers on Initialize
	for (var i = 0; i < locations.length; i++) {
		//get position from the location array
		var position = locations[i].location;
		var title = locations[i].title;
		var id = locations[i].id;
		//create a marker for location as a property for each location
		locations[i].marker = new google.maps.Marker({
			map: map,
			position: position,
			title: title,
			animation: google.maps.Animation.DROP,
			icon: defaultIcon,
			id: id,
			open: false
		});
		//var to create accessability to marker
		var marker = locations[i].marker;
		//push marker to array of markers
		markers.push(marker);
		//add two event listeners , one for mouseover and one
		// for mouseout to change the colors
		marker.addListener('mouseover', mouseover);
		marker.addListener('mouseout', mouseout);
		//create an onclick event to open the large InfoWindow
		marker.addListener('click', openInfowindow);
		//extend bounds for every maker we make
		bounds.extend(markers[i].position);
	}
	//functions to highlight
	function mouseover() {
		this.setIcon(highlightedIcon);
	}
	//return to default
	function mouseout() {
		this.setIcon(defaultIcon);
	}
	//function to open infowindow on selected marker
	function openInfowindow() {
		vm.showMe(false);
		vm.showFS(false);
		populateInfoWindow(this, largeInfowindow);
		vm.fourSqFinds([]);
		foursquare(this);
	}
	// Instantiate Knockout once the map is initialized
	//defines the value to our global variable
	vm = new ViewModel();
	ko.applyBindings(vm); //uses this to instantiate viewmodel, vm makes viewmodel global for access
	//instead of this ko.applyBindings(new ViewModel());
	//tell map to fit itself to those bounds
	map.fitBounds(bounds);
} //end of initMap()
// function to populate the infowindow when marker is clicked.
function populateInfoWindow(marker, infowindow) {
	//check to see if infowindow is already open
	if (infowindow.marker != marker) {
		//clear the infowindow content allowing streetview to load
		infowindow.setContent('');
		infowindow.marker = marker;
		getPlacesDetails(marker, infowindow);
		//see if the marker property is cleared if infowindow is closed
		infowindow.addListener('closeclick', function() {
			vm.showMe(true);
			vm.showFS(true);
			infowindow.marker = null;
			marker.setIcon(defaultIcon);
			vm.fourSqFinds([]);
		});
		//open the infowindow on the proper marker
		infowindow.open(map, marker);
		marker.setAnimation(google.maps.Animation.BOUNCE);
		setTimeout(function() {
			marker.setAnimation(null);
		}, 5000);
	}
}
//gets place details from place_id via PlacesService
function getPlacesDetails(marker, infowindow) {
	var service = new google.maps.places.PlacesService(map);
	service.getDetails({
		placeId: marker.id
	}, function(place, status) {
		if (status === google.maps.places.PlacesServiceStatus.OK) {
			// Set the marker property on this infowindow so it isn't created again.
			infowindow.marker = marker;
			var innerHTML = '<div id = "places-details">';
			innerHTML += ' <div id = "place-name">';
			if (place.name) {
				innerHTML += '<strong>' + place.name + '</strong>';
			}
			innerHTML += '</div>';
			if (place.formatted_address) {
				innerHTML += '<br>' + place.formatted_address;
			}
			if (place.formatted_phone_number) {
				innerHTML += '<br>' + place.formatted_phone_number;
			}
			if (place.opening_hours) {
				innerHTML += '<br><br><strong>Hours:</strong><br>' + place.opening_hours.weekday_text[0] + '<br>' + place.opening_hours.weekday_text[1] + '<br>' + place.opening_hours.weekday_text[2] + '<br>' + place.opening_hours.weekday_text[3] + '<br>' + place.opening_hours.weekday_text[4] + '<br>' + place.opening_hours.weekday_text[5] + '<br>' + place.opening_hours.weekday_text[6];
			}
			if (place.website) {
				innerHTML += '<br><br><a id = "website" href=' + place.website + '>' + place.website + '</a>';
			}
			if (place.photos) {
				innerHTML += '<br><br><img src="' + place.photos[0].getUrl({
					maxHeight: 100,
					maxWidth: 200
				}) + '">';
			}
			//creates #pano element for streetViewService to use
			innerHTML += ' <div id = "pano"></div>';
			innerHTML += '<div class="iw-bottom-gradient"></div>';
			innerHTML += '</div>';
			infowindow.setContent(innerHTML);
			infowindow.open(map, marker);
			// Make sure the marker property is cleared if the infowindow is closed.
			infowindow.addListener('closeclick', function() {
				infowindow.marker = null;
			});
			//create new streetViewService instance
			var streetViewService = new google.maps.StreetViewService();
			var radius = 50;
			//if the status is OK a pano was found, get position of streetview
			//image and calculate the heading, then get the panorama from that
			//then set the options
			var getStreetView = function(data, status) {
				if (status === google.maps.StreetViewStatus.OK) {
					var nearStreetViewLocation = data.location.latLng;
					//computes correct heading so that we're looking at our building
					//from the nearest streetViewLocation
					var heading = google.maps.geometry.spherical.computeHeading(nearStreetViewLocation, marker.position);
					var panoramaOptions = {
						position: nearStreetViewLocation,
						pov: {
							heading: heading,
							pitch: 30
						}
					};
					var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);
				} else {
					document.getElementById('pano').innerHTML = '<br>' + 'No Street View Found';
				}
			};
			//use streetview service to get closest streetview image
			//50 metres of the markers position
			streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
		}
	});
}
// //create markers and color to use in loop to create
//marker array for each location, using defaultIcon, highlightedIcon
//for mouseover
function makeMarkerIcon(markerColor) {
	var markerImage = new google.maps.MarkerImage('http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor + '|40|_|%E2%80%A2', new google.maps.Size(20, 35), new google.maps.Point(0, 0), new google.maps.Point(10, 35), new google.maps.Size(20, 35));
	return markerImage;
}
