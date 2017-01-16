//THE BEGINNING OF LIFE!
var express = require('express');
var util = require('./server-utility/request-handlers');


var app = express();
var port = process.env.PORT || 8080;
//set up server

app.use(express.static(__dirname + '/front-end'))

//create something for a 'GET every node' request to graphene
app.get('/nodes', util.getNodes);

//create something for a 'POST' request to graphene
app.post('/nodes', function(req, res) {
  console.log('something');
})


app.listen(port);
console.log('Server listening on port: ', port);
