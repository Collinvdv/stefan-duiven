export default class Map {

  constructor(el) {
    // -------------------------------------------------------------------
    // :: CONSTRUCTOR
    // -------------------------------------------------------------------
    this.el = document.querySelector(el);
  }

	initMap() {
		var map = new google.maps.Map(document.getElementById('map'), {

			center: {lat: 51.198038900, lng: 3.217751600},
			zoom: 12,
			styles: [
			    {
			        "featureType": "all",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#fedadc"
			            },
			            {
			                "gamma": "0.70"
			            }
			        ]
			    },
			    {
			        "featureType": "all",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "gamma": "1"
			            },
			            {
			                "lightness": "0"
			            },
			            {
			                "color": "#ff000d"
			            },
			            {
			                "weight": "2"
			            }
			        ]
			    },
			    {
			        "featureType": "all",
			        "elementType": "labels.text.stroke",
			        "stylers": [
			            {
			                "saturation": "0"
			            },
			            {
			                "lightness": "0"
			            },
			            {
			                "weight": 2
			            },
			            {
			                "gamma": "1.00"
			            },
			            {
			                "color": "#ffffff"
			            }
			        ]
			    },
			    {
			        "featureType": "all",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "gamma": "2"
			            },
			            {
			                "weight": "1.58"
			            },
			            {
			                "saturation": "-100"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "lightness": 30
			            },
			            {
			                "saturation": 30
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "saturation": 20
			            }
			        ]
			    },
			    {
			        "featureType": "poi.park",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "lightness": 20
			            },
			            {
			                "saturation": -20
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "lightness": 10
			            },
			            {
			                "saturation": -30
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#ffffff"
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "saturation": 25
			            },
			            {
			                "lightness": "0"
			            },
			            {
			                "color": "#fedadc"
			            },
			            {
			                "gamma": ".5"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "all",
			        "stylers": [
			            {
			                "lightness": -20
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "color": "#ffffff"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "labels.text.stroke",
			        "stylers": [
			            {
			                "color": "#da2834"
			            },
			            {
			                "gamma": "1.5"
			            }
			        ]
			    }
			]
		});

		fetch('/api/installations', {
				method: 'get',
		})
		.then(function(response) {
				return response.json();
		})
		.then(function(result) {

			result.data.forEach(function (value) {
				var marker = new google.maps.Marker({
						position: new google.maps.LatLng(value.lat, value.long),
						title: value.title
				});

				marker.setMap(map);
			});

		});

  }

}
