
var https = require('https');
function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */

  https.get(requestOptions,function(chunks){

    chunks.setEncoding('utf8');

    chunks.on('data',function(data){
      var dataStream = '';
      dataStream += data;
      console.log("Data from https:",dataStream);

    });

    chunks.on('error',function(err){
      console.log("Error:",err);
    });


    chunks.on('end',function(){
      console.log("Response stream complete!");
    });







  });



};

getAndPrintHTML();