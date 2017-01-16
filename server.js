//THE BEGINNING OF LIFE!
var express = require('express');


var app = express();
var port = process.env.PORT || 8080;
//set up server
app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.listen(port);
console.log('Server listening on port: ', port);
