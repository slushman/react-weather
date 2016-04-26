var names = [ 'Chris', 'Mistie', 'Craig', 'Kelli' ];

/*names.forEach( function( name ) {

	console.log( 'foreach', name );

});

names.forEach( (name) => {
	console.log( 'arrowfunc', name );
});*/

/*names.forEach( (name) => console.log( name ) );

var returnMe = (name) => name + '!';

console.log( returnMe( 'Chris' ) );*/

/*var person = {
	name: 'Chris',
	greet: function() {
		names.forEach((name) => console.log( this.name + ' says hi to ' + name ));
	}
};

person.greet();*/

function add( a, b ) {
	return a + b;
}

var addStatement = ( a, b ) => {
	return a+b;
}

var addExpression = ( a, b ) => a + b;

console.log( add( 1, 3) );
console.log( addStatement( 1, 3 ) );
console.log( addExpression( 1, 3 ) );