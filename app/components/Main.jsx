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
 * Removed the "this.props" since "this" now refers to the parent object.
 */
var Main = (props) => {
	return (
		<div>
			<Nav/>
			<div className="row">
				<div className="columns medium-6 large-4 small-centered">
					{props.children}
				</div>
			</div>
		</div>
	);
};

module.exports = Main;
