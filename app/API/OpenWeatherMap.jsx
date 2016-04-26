var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?units=imperial&appid=f660b818f1705da711b3b8dd4cadda9a';

module.exports = {
	getTemp: function( location ) {

		var encodedLocation = encodeURIComponent( location );
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then( function(res) {

			var temp = res.data.list[0].main.temp;

			if ( temp ) {

				return temp;

			} else {

				throw new Error( res.data.message );

			}

		}, function(res) {

			throw new Error(res.data.message);

		});

	}
};