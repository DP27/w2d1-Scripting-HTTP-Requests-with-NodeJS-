
var host = process.argv[2];
var path = process.argv[3];

var options = {
  host: String(host),
  path: String(path),
};

var https = require('https');
function getAndPrintHTML (options) {


  https.get(options,function(chunks){

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

getAndPrintHTML(options);
