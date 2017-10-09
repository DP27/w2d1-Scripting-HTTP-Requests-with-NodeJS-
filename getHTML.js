
var https = require('https');

var host = process.argv[2];
var path = process.argv[3];

var options = {
  host: String(host),
  path: String(path),
};

var dataStream = '';

function getHTML (options, callback) {

  /* Add your code here */


  https.get(options,function(chunks){

    chunks.setEncoding('utf8');

    chunks.on('data',function(data){
      // var dataStream = '';
      dataStream += data;
      //console.log("Data from https:",dataStream);

    });

    chunks.on('error',function(err){
      console.log("Error:",err);
    });


    chunks.on('end',function(){
      console.log("Response stream complete!");

       return callback(dataStream);
    });







  });


}

function printHTML (html) {


  console.log(html);
}

getHTML(options,printHTML);

