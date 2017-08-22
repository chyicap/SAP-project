const mdl = require('./js/mdl');
const algos = require('algos');

mdl.setET(-0.76646);

// console.log(mdl.mdl(21.73913043478261));
console.log(algos.secantSolver(mdl.mdl, 27));