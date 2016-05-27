var React = require( 'react' );
var {Link} = require('react-router');

/**
 * Switched to stateless component
 * with arrow function.
 */
var Examples = ( props ) => {
	return (
		<div>
			<h1 className="text-center">Examples</h1>
			<p>Here are a few example locations to try out:</p>
			<ol>
				<li>
					<Link to='/?location=Decatur,IL'>Decatur, IL</Link>
				</li>
				<li>
					<Link to='/?location=London,England'>London, England</Link>
				</li>
			</ol>
		</div>
	);
};

module.exports = Examples;
