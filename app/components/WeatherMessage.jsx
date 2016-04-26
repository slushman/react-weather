var React = require( 'react' );

/**
 * Switched to stateless component
 * with arrow function.
 */
var WeatherMessage = ( {temp, location} ) => {

	return (
		<div>
			<p>It is {temp} degrees in {location}.</p>
		</div>
	);
}

module.exports = WeatherMessage;