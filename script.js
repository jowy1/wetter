$(document).ready(function(){
	navigator.geolocation.getCurrentPosition(function(position){

		var koordinaten = {

			longitude: position.coords.longitude,
			latitude: position.coords.latitude
		};

		$.ajax({

			url: 'https://api.forecast.io/forecast/b7cadfacd8c9a274d6aec6b01618e241/' + koordinaten.latitude + ',' + koordinaten.longitude,

			data:{

				units: 'si',
				lang: 'de'

			},

			dataType: 'jsonp'

		}).done(function(data) {

			console.log(data);


		});	

		//console.log(position);
		//$('.longitude').text(position.coords.longitude);
		//$('.latitude').text(position.coords.latitude);
		//$('.accuracy').text(position.coords.accuracy);
	});
});