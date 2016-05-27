var React = require( 'react' );
var {Link} = require('react-router');

/**
 * Switched to stateless component
 * with arrow function.
 */
var About = ( props ) => {
	return (
		<div>
			<h1 className="text-center">About</h1>
			<p>This is a simple weather data fetching app written by <a href="https://slushman.com">Chris Wilcoxson</a>. I am learning how to work with React by building this app.</p>
			<p>You can find the code for this app at <a href="https://github.com/slushman/react-weather">Github repo.</a></p>
		</div>
	);
};

module.exports = About;
