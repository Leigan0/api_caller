// index.js 
// by requiring `babel/register`, all of our successive `require`s will be Babel'd
// added this file to allow me to use es6 syntax - import etc within node.js 

require('babel-register')({
    presets: [ 'env' ]
 });
 
 require('./server');