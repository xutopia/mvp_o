//THE BEGINNING OF LIFE!
var express = require('express');
var Path = require('path');
var util = require('./server-utility/request-handlers');


var app = express();
var port = process.env.PORT || 8080;
//set up server
var a = __dirname + '/front-end';
console.log(a);

app.use(express.static(Path.join(__dirname, '/front-end')))


app.use('/public', express.static(Path.join(__dirname, '/public')))
app.use('/node_modules', express.static(Path.join(__dirname, '/node_modules')));

// app.get('/', function(req, res) {
//   res.sendfile('bundle.js');
// })
//create something for a 'POST' request to graphene
app.post('/api/nodes', util.postNode);

//create something for a 'GET every node' request to graphene
app.get('/api/nodes', util.getNodes);


app.listen(port);
console.log('Server listening on port: ', port);
