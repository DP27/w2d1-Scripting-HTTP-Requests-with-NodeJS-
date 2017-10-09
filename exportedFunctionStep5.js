var https = require('https');

var getHTML = require('./https-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

console.log(getHTML)

getHTML.getHTML(requestOptions,getHTML.printHTML);