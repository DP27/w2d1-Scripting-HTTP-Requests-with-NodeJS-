var https = require('https');


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

var options = {};


module.exports = {getHTML : getHTML,options,printHTML};