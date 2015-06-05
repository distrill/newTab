var express = require( 'express' ),
    morgan = require( 'morgan' );

var app = express();

app.use( morgan( 'dev' ) );

app.set( 'views', './' );
app.set( 'view engine', 'ejs' );
app.use( express.static( './public' ));

app.listen( 8181, '127.0.0.1' );

app.get( '/', function( req, res ) {
    res.render( 'index', {} )
});

console.log( 'POST_mediocrity_ running at http://localhost:8080/' );
