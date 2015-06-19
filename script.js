$(document).ready(function(){

	var icon;
	var skycons = new Skycons({
		color: "#bada55",
		resizeClear: true

});
	navigator.geolocation.getCurrentPosition(function(position){

		var koordinaten = {

			longitude: position.coords.longitude,
			latitude: position.coords.latitude

		};


		//forecast io anfrage

		$.ajax({

			url: 'https://api.forecast.io/forecast/b7cadfacd8c9a274d6aec6b01618e241/' + koordinaten.latitude + ',' + koordinaten.longitude,

			data:{

				units: 'si',
				lang: 'de'

			},

			dataType: 'jsonp'

		}).done(function(data) {

			console.log(data);

			$('.temperature').text(data.currently.apparentTemperature + "°C");
			$('.wettertext').text(data.currently.summary);

			icon = data.currently.icon.toUpperCase();
				skycons.add($('.js-icon')[0], icon);
				skycons.play();	


			//geocode anfrage

			$.ajax({

				url: 'https://maps.googleapis.com/maps/api/geocode/json',

				data: {

					latlng: koordinaten.latitude + ',' + koordinaten.longitude,

					key: 'AIzaSyDgYh-UffzCV54XCcReML4WSqyb0_zv8x8',

					language: 'de'
				}

			}).done(function(data){

				console.log(data);
				$('.address').text(data.results[0].address_components[1].long_name);
			});


		});	

		//console.log(position);
		//$('.longitude').text(position.coords.longitude);
		//$('.latitude').text(position.coords.latitude);
		//$('.accuracy').text(position.coords.accuracy);
	});





//setTimeout(function(){
//	skycons.set($('.js-icon')[0], Skycons.PARTLY_CLOUDY_DAY);
//}, 5000);

});

