var React = require( 'react' );
var Nav = require( 'Nav' );

/*var Main = React.createClass({
	render: function() {
		return (
			<div>
				<Nav/>
				<h2>Main Component</h2>
				{this.props.children}
			</div>
		);
	}
});*/

/**
 * Switched to stateless component
 * with arrow function.
 *
 * Removed the "this.props" since "this" refers to the parent object.
 */
var Main = (props) => {
	return (
		<div>
			<Nav/>
			<h2>Main Component</h2>
			{props.children}
		</div>
	);
};

module.exports = Main;