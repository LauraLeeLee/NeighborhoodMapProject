//-------------Model
// POI location data
var locations = [
  {title: 'Monte Cassino',
  location: {lat: 41.4903315,lng: 13.8133865},
  id: 'ChIJfY4t5_C7OhMRUtdE4FkRmlI',
  showFiltered: ko.observable(true),
  category: ["poi", "churches"]
  },
  {title: 'Abbazia di Casamari',
  location: {lat: 41.6712011,lng: 13.4871188},
  id: 'ChIJPYa6mI1TJRMRTgnwCfQC3J8',
  showFiltered: ko.observable(true),
  category: ["poi", "churches"]
  },
  {title: 'Grotte di Pastena',
  location: {lat: 41.4965448,lng: 13.490696},
  id: 'ChIJZ9xeWKJLJRMRZnyvq7OPiJM',
  showFiltered: ko.observable(true),
  category: ["poi"]
  },
  {title: 'Certosa di Trisulti',
  location: {lat: 41.77965289999999,
  lng: 13.3972988},
  id: 'ChIJDb1wNuNXJRMRLq0HXCRrRSg',
  showFiltered: ko.observable(true),
  category: ["poi", "churches"]
  },
  {title: 'Santuario di Vallepietra',
  location: {lat: 41.9563957,lng: 13.2311503},
  id: 'ChIJFYB8yZXtLxMR_3n6HBquE5o',
  showFiltered: ko.observable(true),
  category: ["poi", "churches"]
  },
  {title: 'Monte Cacume',
  location: {lat: 41.5666667,lng: 13.2333333},
  id: 'ChIJNXQpv8dDJRMRIcft4b0u5jQ',
  showFiltered: ko.observable(true),
  category: ["poi"]
  },
  {title: 'Grotte di Collepardo',
  location: {lat: 41.7583057,lng: 13.3647073},
  id: 'ChIJ0yhRnfBXJRMR8SaXPuElASs',
  showFiltered: ko.observable(true),
  category: ["poi"]
  },
  {title: 'Tempio di Juve',
  location: {lat: 41.2907741,lng: 13.2601077},
  id: 'ChIJw4O8OlwjJRMRcDghq5tPCQ8',
  showFiltered: ko.observable(true),
  category: ["poi"]
  },
  {title: "Terracina",
  location: {lat: 41.2841265,lng: 13.2467785},
  id: 'ChIJh9nwaPIiJRMRVf3DgZPAsHE',
  showFiltered: ko.observable(true),
  category: ["city"]
  },
  {title: 'Capo Fiume',
  location: {lat: 41.781229,lng: 13.4105518},
  id: 'ChIJBYR_YIv4LxMRid62zl2jRXY',
  showFiltered: ko.observable(true),
  category: ["food"]
  },
  {title: 'Dal Patricano',
  location: {lat: 41.574439,lng: 13.269065},
  id: 'ChIJbf8ZVolEJRMRPE2CqSzE9qQ',
  showFiltered: ko.observable(true),
  category: ["food", "hotel"]
  },
  {title: 'Valle dei Lepini',
  location: {lat: 41.5929749,lng: 13.2830475},
  id: 'ChIJfSRiRZJEJRMRTnPO6LgMURo',
  showFiltered: ko.observable(true),
  category: ["food", "hotel"]
  },
  {title: 'La Torretta',
  location: {lat: 41.593569,lng: 13.251473},
  id: 'ChIJCXCjrnFDJRMRvMvZUcrQ4Ls',
  showFiltered: ko.observable(true),
  category: ["food"]
  },
  {title: 'Creazioni Dolciarie Zambardino',
  location: {lat: 41.5741811,lng: 13.3233213},
  id: 'ChIJA2gDt6lFJRMRXr9Uy5JVT1k',
  showFiltered: ko.observable(true),
  category: ["food"]
  },
  {title: 'La Mola', location:
  {lat: 41.6405164,lng: 13.2077839},
  id: 'ChIJJX8p7DBDJRMR6lJdWg8DuCc',
  showFiltered: ko.observable(true),
  category: ["food"]
  },
  {title: 'La Scifa',
  location: {lat: 41.6459897,lng: 13.3519947},
  id: 'ChIJu9FnaoRaJRMR0A_48vJtmbg',
  showFiltered: ko.observable(true),
  category: ["food"]
  },
  {title: 'La Cometa',
  location: {lat: 41.647915,lng: 13.3367828},
  id: 'ChIJV6wowYxaJRMRSKuQdISk6Ac',
  showFiltered: ko.observable(true),
  category: ["food"]
  },
  {title: 'Pizzeria Brunella',
  location: {lat: 41.6520719,lng: 13.3412584},
  id: 'ChIJIQYtJ4paJRMRFq83AgFu9Pc',
  showFiltered: ko.observable(true),
  category: ["food"]
  },
  {title: 'Le Migliori Pizza alla Pala',
  location: {lat: 41.611247,lng: 13.228897},
  id: 'ChIJL-IzCCNDJRMR2yyzEnXAF04',
  showFiltered: ko.observable(true),
  category: ["food"]
  },
  // {title: 'La Terrazza', location: {lat: ,lng:}, id: },
  {title: 'La Passeggiata',
  location: {lat: 41.5916799,lng: 13.2427548},
  id: 'ChIJpR7JqQxDJRMRzk_oQbpBuLA',
  showFiltered: ko.observable(true),
  category: ["food"]
  },
  {title: 'Ricordi Lievitati',
  location: {lat: 41.590483,lng: 13.241865},
  id: 'ChIJ1dX5PwtDJRMRYeOfHiynQ_k',
  showFiltered: ko.observable(true),
  category: ["food"]
  },
  {title:  'Abbazia di Fossanova',
  location: {lat: 41.4381536,lng: 13.1957528},
  id: 'ChIJw8cFRMo_JRMRujicGH4ep0E',
  showFiltered: ko.observable(true),
  category: ["poi", "churches"]
  },
  {title:  'Villa d\'Este',
  location: {lat: 41.9633123,lng: 12.7958058},
  id: 'ChIJw-YlX3B4LxMRmeEzTuqQHr8',
  showFiltered: ko.observable(true),
  category: ["poi"]
  },
  {title:  'Reggia Caserta',
  location: {lat: 41.07321810000001,lng: 14.3270683},
  id: 'ChIJMxPtKrJVOhMRRXKEJAoCnMc',
  showFiltered: ko.observable(true),
  category: ["poi"]
  },
  {title:  'Bob & Jesael',
  location: {lat: 41.6457318,lng: 13.3477838},
  id: 'ChIJ4Ydsg4VaJRMRV5Hm8O4TIcM',
  showFiltered: ko.observable(true),
  category: ["shopping"]
  },
];

//global variable for our view model, defined in app.js defined and instantiated there
var vm;

//-------------ViewModel
var ViewModel = function() {
  var self = this;

  self.showMe = ko.observable(true); //whatever has this is visible
  self.showFS = ko.observable(true); //makes fs conent visible
  self.showChevronUp = ko.observable(true); //hides/shows up
  self.showChevronDown = ko.observable(false); //hides/shows down
  self.showToggle = ko.observable(true);
  self.showNavicon = ko.observable(false);
  self.showCatFilter = ko.observable(true); //hides/shows category filter buttons according to screen size
  // self.linkNotActive = ko.observable(false);


  //language observables for elements with dual language
  self.heading = ko.observable();
  self.categories  = ko.observableArray();//filter button categories array
  self.toggleText  = ko.observable();
  self.selectLang = ko.observable();
  self.noName = ko.observable();
  self.noAddress = ko.observable();
  self.noZip = ko.observable();
  self.noCity = ko.observable();
  self.noCountry = ko.observable();
  self.noUrl = ko.observable();
  self.noDistance = ko.observable();
  self.fsErrorMessage = ko.observable();
  self.noResults = ko.observable();
  self.fsH2 = ko.observable();
  self.fsH3 = ko.observable();
  self.fsDistance = ko.observable();
  self.fsMeters = ko.observable();

  // generic function to 'wait' for language chosen
  self.translate = function(languageObj) {
    self.heading(languageObj.heading);
    self.categories(languageObj.categories);
    self.toggleText(languageObj.toggleText);
    self.selectLang(languageObj.selectLang);
    self.noName(languageObj.noName);
    self.noAddress(languageObj.noAddress);
    self.noZip(languageObj.noZip);
    self.noCity(languageObj.noCity);
    self.noCountry(languageObj.noCountry);
    self.noUrl(languageObj.noUrl);
    self.noDistance(languageObj.noDistance);
    self.fsErrorMessage(languageObj.fsErrorMessage);
    self.noResults(languageObj.noResults);
    self.fsH2(languageObj.fsH2);
    self.fsH3(languageObj.fsH3);
    self.fsDistance(languageObj.fsDistance);
    self.fsMeters(languageObj.fsMeters);
  };



  //english info
  self.englishText = {
    heading: 'POI Visited Near Patrica Italy',
    categories: ['City', 'POI', 'Food', 'Shop', 'Hotel', 'Churches'],
    toggleText: 'Toggle Places List',
    selectLang: 'Language',
    noName: "No name available",
    noAddress: "No address available",
    noZip: "No postal code available",
    noCity: "No city available",
    noCountry: "No country available",
    noUrl: "No website available",
    noDistance: "No distance available",
    fsErrorMessage: "Foursquare data unable to load. Please try later",
    noResults: "No Results Found Nearby",
    fsH2: "Locations Nearby",
    fsH3: "results powered by Foursquare",
    fsDistance: "Distance away: ",
    fsMeters: " meters",
  };

// italian info
  self.italianText = {
    heading: 'Posti Visitata Vicino Patrica Italia',
    categories: ['Citta', 'POI', 'Cibo', 'Chiese', 'Negozi', 'Alberghi'],
    toggleText: 'Attiva la Lista dei Luoghi',
    selectLang: 'Lingua',
    noName: "Nessun nome disponibile",
    noAddress: "Nessun indirizzo disponibile",
    noZip: "Nessun codice postale disponibile",
    noCity: "Nessun citta' disponibile",
    noCountry: "Nessun nazione disponibile",
    noUrl: "Nessun sito web disponibile",
    noDistance: "Nessun distanza disponibile",
    fsErrorMessage: "FourSquare non puo caricare. Prova piu' tardi",
    noResults: "Nessun Risultati Trovati Vicino",
    fsH2: "Posti nelle Vicinanze",
    fsH3: "risultati alimentati da Foursquare",
    fsDistance: "Distanza via: ",
    fsMeters: " metri",
  };

  //englishText is now a property of ViewModel, needs to be accessed in this manner versus self.translate(englishText)
  self.translate(self.englishText);

  //variable to contain input value
  self.filter = ko.observable("");

  this.locations = ko.observableArray(locations);

  // //creates list to populate on page
  self.placesList = ko.observableArray([]);

  locations.forEach(function(location) {
  });

  //create empty array to hold foursquare results
  self.fourSqFinds =  ko.observableArray();
  console.log(self.fourSqFinds());

  self.emptySearch = ko.observable(true);
    if(self.fourSqFinds.length > 0){
      self.emptySearch = false;
    }

  self.showInfowindow = function(location) {
    console.log(location);
    location.marker.setIcon(defaultIcon);
    populateInfoWindow(location.marker, largeInfowindow);
    vm.fourSqFinds([]);
    foursquare(location.marker);
    self.showMe(false);
    self.showFS(false);
  };

  //filter locations
    self.filterPlaces = ko.computed(function() {
      var filter = self.filter().toLowerCase();

      self.locations().forEach(function(location) {
        if(location.title.toLowerCase().indexOf(filter) !== -1) {
          location.showFiltered(true); //show filtered location(s)
          location.marker.setVisible(true); //show filtered location map marker
        } else {
          location.showFiltered(false); // hide non matching list item
          location.marker.setVisible(false); //hide map marker for non matching
        }
      });
    });

    //array for filter filter categories
    self.filterArray = ko.observableArray([
      { id: "city-filter",
        filterName: "filterCity",
        value: ko.computed(function(){
          return self.categories()[0];
        }),
        category: "city",
      },
      { id: "poi-filter",
        filterName: "filterPOI",
        value: ko.computed(function(){
          return self.categories()[1];
        }),
        category: "poi",
      },
      { id: "food-filter",
        filterName: "filterFood",
        value: ko.computed(function(){
          return self.categories()[2];
        }),
        category: "food",
      },
      { id: "shop-filter",
        filterName: "filterShop",
        value: ko.computed(function(){
          return self.categories()[3];
        }),
        category: "shopping",
      },
      { id: "hotel-filter",
        filterName: "filterHotel",
        value: ko.computed(function(){
          return self.categories()[4];
        }),
        category: "hotel",
      },
      { id: "church-filter",
        filterName: "filterChurch",
        value: ko.computed(function(){
          return self.categories()[5];
        }),
        category: "churches",
      },
    ]);

    //filter by category
    self.filterCategories = function(filterObj) {
      self.locations().forEach(function(location) {
      //for loop to check each item in locations property
        for(var i = 0; i < location.category.length; i++) {
          if(location.category[i] == filterObj.category) {
            location.showFiltered(true);
            location.marker.setVisible(true);
          } else {
            location.showFiltered(false);
            location.marker.setVisible(false);
          }
        }
      });
    }

    //filter city
      // self.filterCity = function(category) {
      //   self.locations().forEach(function(location) {
      //     //for loop to check each item in locations property of category array
      //     for ( var i = 0; i < location.category.length; i++) {
      //       if(location.category[i] === "city") {
      //         location.showFiltered(true);
      //         location.marker.setVisible(true);
      //       } else {
      //         location.showFiltered(false);
      //         location.marker.setVisible(false);
      //       }
      //     }
      //   });
      // };

    // //filter poi
    //   self.filterPOI = function(category) {
    //     self.locations().forEach(function(location) {
    //       for ( var i = 0; i < location.category.length; i++) {
    //         if(location.category[i] === "poi") {
    //           location.showFiltered(true);
    //           location.marker.setVisible(true);
    //         } else {
    //           location.showFiltered(false);
    //           location.marker.setVisible(false);
    //         }
    //       }
    //     });
    //   };
    //
    // //filter Food
    //   self.filterFood = function(category) {
    //     self.locations().forEach(function(location) {
    //       for ( var i = 0; i < location.category.length; i++) {
    //         if(location.category[i] === "food") {
    //           location.showFiltered(true);
    //           location.marker.setVisible(true);
    //         } else {
    //           location.showFiltered(false);
    //           location.marker.setVisible(false);
    //         }
    //       }
    //     });
    //   };
    //
    //   //filter shop
    //   self.filterShop = function(category) {
    //     self.locations().forEach(function(location) {
    //       for ( var i = 0; i < location.category.length; i++) {
    //         if(location.category[i] === "shopping") {
    //           location.showFiltered(true);
    //           location.marker.setVisible(true);
    //         } else {
    //           location.showFiltered(false);
    //           location.marker.setVisible(false);
    //         }
    //       }
    //     });
    //   };
    //
    // //filter hotel
    //   self.filterHotel = function(category) {
    //     self.locations().forEach(function(location) {
    //       for ( var i = 0; i < location.category.length; i++) {
    //         if(location.category[i] === "hotel") {
    //           location.showFiltered(true);
    //           location.marker.setVisible(true);
    //         } else {
    //           location.showFiltered(false);
    //           location.marker.setVisible(false);
    //         }
    //       }
    //     });
    //   };
    //
    // //filter churches
    //   self.filterChurch = function(category) {
    //     self.locations().forEach(function(location) {
    //       for ( var i = 0; i < location.category.length; i++) {
    //         if(location.category[i] === "churches") {
    //           location.showFiltered(true);
    //           location.marker.setVisible(true);
    //         } else {
    //           location.showFiltered(false);
    //           location.marker.setVisible(false);
    //         }
    //       }
    //     });
    //   };

   self.togglePlaces = function(){
        self.showMe(!self.showMe());
  };

  // media queries for mobile devices
  if (window.matchMedia("all and (max-width: 480px)").matches) {
    self.showMe(false);
    self.showToggle(false);
    self.showNavicon(true);
    self.showCatFilter(false);
    // self.showChevronUp(true);
  } else {
    self.showMe(true);
    self.showToggle(true);
    self.showNavicon(false);
  }

  //collapses height of FS content div when chevron is clicked
  self.collapseFS = function() {
    document.getElementById('four_sq_content').style.maxHeight = "6vh";
    self.showChevronDown(true);
    self.showChevronUp(false);
  };
  //grows height of FS content div when down chevron is clicked
  self.growFS = function() {
    document.getElementById('four_sq_content').style.maxHeight = "60vh";
    self.showChevronUp(true);
    self.showChevronDown(false);
  };
};//end of viewmodel




//object constructor to obtain information from foursquare results
var NearByVenues = function(venue) {
    console.log("venue",venue);
  this.name = venue.venue.name ? venue.venue.name: vm.noName;
  this.address = venue.venue.location.address ? venue.venue.location.address: vm.noAddress;
  this.zip = venue.venue.location.postalCode ? venue.venue.location.postalCode: vm.noZip;
  this.city = venue.venue.location.city ? venue.venue.location.city: vm.noCity;
  this.country = venue.venue.location.country ? venue.venue.location.country: vm.noCountry;
  this.url = venue.venue.url ? venue.venue.url: vm.noUrl; //removes link for when no website is found
  this.distance = venue.venue.location.distance ? venue.venue.location.distance: vm.noDistance;
  this.notActiveClass = ko.observable(venue.venue.url ? false : true);   //checks to see if not-active class needs to be applied
};

//Adds Foursquare api to search for what is near a location
var foursquare = function(location) {
  //foursquare info to execute the API request
  var clientId = 'ITOWGAPHCUEOKCWFWWZAS4OUQECKZD0TGGXN0Z0AH1RAKRHS';
  var clientSecret = 'AWQG20HB2FRHVKEEMMN5SGCP4EQXXPBH2PP0SM01XPNVUTFE';
  var fourSqUrl = "https://api.foursquare.com/v2/venues/explore";
  var latLng = `ll=${location.position.lat()},${location.position.lng()}`;
  var useUrl = fourSqUrl + "?" + latLng + "&radius=1600" +"&locale=it&sortByDistance=1" + "&client_id=" + clientId + "&client_secret=" + clientSecret + "&v=20180104";
  console.log(`${location.position.lat()},${location.position.lng()}`);

  //ajax request
  $.ajax({
    type: "GET",
    dataType: "json",
    url: useUrl,
    headers: {
    'Accept-Language': 'it'
  },
    success: function(data) {
      console.log(data);
      // document.getElementById('four_sq_content').style.display = "block";
      // document.getElementById('fade-four-sq').style.display = "block";
      vm.showMe(false);
      vm.showFS(false);

      var venues = data.response.groups[0].items;

      //push new instances of our class into the observable array
      if(venues.length > 0){
        venues.forEach(function(venue) {
          vm.fourSqFinds.push(new NearByVenues(venue));
        });
        vm.emptySearch(false);
      } else {
        //creates fallback message if no results are found nearby
        vm.emptySearch(true);
      }
      console.log("Completed Array", vm.fourSqFinds());
    },

    error: function(e) {
      vm.showMe(false);
      vm.showFS(false);
      vm.noResults(vm.fsErrorMessage()); //updates the value of KOobservable  bound to the error handling element
    }
  });
};


// ko.applyBindings(new ViewModel()); instantiates in the initMap function in app.js
