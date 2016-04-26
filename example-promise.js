/*
function getTempCallback(Location, callback) {

	callback(undefined, 78);
	callback('City not found');

}

getTempCallback ('Philadelphia', function( err, temp ){
	if (err) {
		console.log('error', err);
	} else {
		console.log ('success', temp)
	}
});

function getTempPromise( location ) {

	return new Promise( function( resolve, reject ) {

		setTimeout( function() {

			resolve( 79 );

			reject( 'City not found.' );

		}, 1000 );
	});

}

getTempPromise( 'Philadelphia' ).then( function(temp){
	console.log( 'promise success', temp );
}, function (err) {
	console.log( 'promise error', err );
});
*/

function addPromise( a, b ) {

	return new Promise( function( resolve, reject ) {

		if ( typeof a !== 'number' ) { reject( 'a is not a number' ); }
		if ( typeof b !== 'number' ) { reject( 'b is not a number' ); }

		resolve( a + b );

	});

}

addPromise( 2, 3 ).then( function( sum ) {

	console.log( 'Here is your sum: ', sum );

}, function ( err ) {

	console.log( 'error', err );

});

addPromise( 2, 'z' ).then( function( sum ) {

	console.log( 'Here is your sum: ', sum );

}, function ( err ) {

	console.log( 'error', err );

});

addPromise( 'y', 3 ).then( function( sum ) {

	console.log( 'Here is your sum: ', sum );

}, function ( err ) {

	console.log( 'error', err );

});