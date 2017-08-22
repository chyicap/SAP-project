var algos = require( "algos" ) ;
var x0 = algos.bisectionSolver( function(x) { return Math.exp(x) + x*x - 10 } ) ;

console.log(x0);