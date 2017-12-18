//-------------Model
// POI location data
var locations = [
  {title: 'Monte Cassino',
  location: {lat: 41.4903315,lng: 13.8133865},
  id: 'ChIJfY4t5_C7OhMRUtdE4FkRmlI',
  showFiltered: ko.observable(true)
  },
  {title: 'Abbazia di Casamari',
  location: {lat: 41.6712011,lng: 13.4871188},
  id: 'ChIJPYa6mI1TJRMRTgnwCfQC3J8',
  showFiltered: ko.observable(true)
  },
  {title: 'Grotte di Pastena',
  location: {lat: 41.4965448,lng: 13.490696},
  id: 'ChIJZ9xeWKJLJRMRZnyvq7OPiJM',
  showFiltered: ko.observable(true)
  },
  {title: 'Certosa di Trisulti',
  location: {lat: 41.77965289999999,
  lng: 13.3972988},
  id: 'ChIJDb1wNuNXJRMRLq0HXCRrRSg',
  showFiltered: ko.observable(true)
  },
  {title: 'Santuario di Vallepietra',
  location: {lat: 41.9563957,lng: 13.2311503},
  id: 'ChIJFYB8yZXtLxMR_3n6HBquE5o',
  showFiltered: ko.observable(true)
  },
  {title: 'Monte Cacume',
  location: {lat: 41.5666667,lng: 13.2333333},
  id: 'ChIJNXQpv8dDJRMRIcft4b0u5jQ',
  showFiltered: ko.observable(true)
  },
  {title: 'Grotte di Collepardo',
  location: {lat: 41.7583057,lng: 13.3647073},
  id: 'ChIJ0yhRnfBXJRMR8SaXPuElASs',
  showFiltered: ko.observable(true)
  },
  {title: 'Tempio di Juve',
  location: {lat: 41.2907741,lng: 13.2601077},
  id: 'ChIJw4O8OlwjJRMRcDghq5tPCQ8',
  showFiltered: ko.observable(true)
  },
  {title: "Terracina",
  location: {lat: 41.2841265,lng: 13.2467785},
  id: 'ChIJmWqgT2wjJRMRk6s2_dnYr_M',
  showFiltered: ko.observable(true)
  },
  {title: 'Capo Fiume',
  location: {lat: 41.781229,lng: 13.4105518},
  id: 'ChIJBYR_YIv4LxMRid62zl2jRXY',
  showFiltered: ko.observable(true)
  },
  {title: 'Dal Patricano',
  location: {lat: 41.574439,lng: 13.269065},
  id: 'ChIJbf8ZVolEJRMRPE2CqSzE9qQ',
  showFiltered: ko.observable(true)
  },
  {title: 'Valle dei Lepini',
  location: {lat: 41.5929749,lng: 13.2830475},
  id: 'ChIJfSRiRZJEJRMRTnPO6LgMURo',
  showFiltered: ko.observable(true)
  },
  {title: 'La Torretta',
  location: {lat: 41.593569,lng: 13.251473},
  id: 'ChIJCXCjrnFDJRMRvMvZUcrQ4Ls',
  showFiltered: ko.observable(true)
  },
  {title: 'Creazioni Dolciarie Zambardino',
  location: {lat: 41.5741811,lng: 13.3233213},
  id: 'ChIJA2gDt6lFJRMRXr9Uy5JVT1k',
  showFiltered: ko.observable(true)
  },
  {title: 'La Mola', location:
  {lat: 41.6405164,lng: 13.2077839},
  id: 'ChIJJX8p7DBDJRMR6lJdWg8DuCc',
  showFiltered: ko.observable(true)
  },
  {title: 'La Scifa',
  location: {lat: 41.6459897,lng: 13.3519947},
  id: 'ChIJu9FnaoRaJRMR0A_48vJtmbg',
  showFiltered: ko.observable(true)
  },
  {title: 'La Cometa',
  location: {lat: 41.647915,lng: 13.3367828},
  id: 'ChIJV6wowYxaJRMRSKuQdISk6Ac',
  showFiltered: ko.observable(true)
  },
  {title: 'Pizzeria Brunella',
  location: {lat: 41.6520719,lng: 13.3412584},
  id: 'ChIJIQYtJ4paJRMRFq83AgFu9Pc',
  showFiltered: ko.observable(true)
  },
  {title: 'Le Migliori Pizza alla Pala',
  location: {lat: 41.611247,lng: 13.228897},
  id: 'ChIJL-IzCCNDJRMR2yyzEnXAF04',
  showFiltered: ko.observable(true)
  },
  // {title: 'La Terrazza', location: {lat: ,lng:}, id: },
  {title: 'La Passeggiata',
  location: {lat: 41.5916799,lng: 13.2427548},
  id: 'ChIJpR7JqQxDJRMRzk_oQbpBuLA',
  showFiltered: ko.observable(true)
  },
  {title: 'Ricordi Lievitati',
  location: {lat: 41.590483,lng: 13.241865},
  id: 'ChIJ1dX5PwtDJRMRYeOfHiynQ_k',
  showFiltered: ko.observable(true)
  },
  {title:  'Abbazia di Fossanova',
  location: {lat: 41.4381536,lng: 13.1957528},
  id: 'ChIJw8cFRMo_JRMRujicGH4ep0E',
  showFiltered: ko.observable(true)
  },
  {title:  'Villa d\'Este',
  location: {lat: 41.9633123,lng: 12.7958058},
  id: 'ChIJw-YlX3B4LxMRmeEzTuqQHr8',
  showFiltered: ko.observable(true)
  },
  {title:  'Reggia Caserta',
  location: {lat: 41.07321810000001,lng: 14.3270683},
  id: 'ChIJMxPtKrJVOhMRRXKEJAoCnMc',
  showFiltered: ko.observable(true)
  },
  {title:  'Bob & Jesael',
  location: {lat: 41.6457318,lng: 13.3477838},
  id: 'ChIJ4Ydsg4VaJRMRV5Hm8O4TIcM',
  showFiltered: ko.observable(true)
  },
  // {title:  , location: {lat: ,lng:}, id: },
  // {title:  , location: {lat: ,lng:}, id: },
];

//-------------ViewModel
var ViewModel = function() {
  var self = this;

  //variable to contain input value
  self.filter = ko.observable("");

  this.locations = ko.observableArray(locations);

  // //creates list to populate on page
  self.placesList = ko.observableArray([]);

  locations.forEach(function(location) {
  });


  self.showInfowindow = function(location) {
    console.log(location);
    populateInfoWindow(location.marker, largeInfowindow);
  }

  //filter locations
    self.filterPlaces = ko.computed(function() {
      var filter = self.filter().toLowerCase();

      self.locations().forEach(function(location) {
        if(location.title.toLowerCase().indexOf(filter) !== -1) {
          location.showFiltered(true); //show filtered location(s)
          location.marker.setVisible(true); //show filtered location map marker
        } else {
          location.showFiltered(false); // hide non matching list item
          location.marker.setVisible(false); //hide map markre for non matching
        }
      });
    });

}




// ko.applyBindings(new ViewModel());
//--------------View
