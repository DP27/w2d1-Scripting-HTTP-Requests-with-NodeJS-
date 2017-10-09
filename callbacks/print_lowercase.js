var https = require('https');

var getHTML = require('../https-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};



getHTML.getHTML(requestOptions, printLowerCase);

function printLowerCase(http){
console.log(http.toLowerCase());

}