//Create utility functions for making the requests to grapheneDB
var neo4j = require('neo4j-driver').v1;

var graphenedbURL = process.env.GRAPHENEDB_BOLT_URL || "http://localhost:7474";
var graphenedbUser = process.env.GRAPHENEDB_BOLT_USER || "neo4j";
var graphenedbPass = process.env.GRAPHENEDB_BOLT_PASSWORD || "neo4j";

var driver = neo4j.driver(graphenedbURL, neo4j.auth.basic(graphenedbUser, graphenedbPass));

exports.getNodes = function(req, res, next) {
  var session = driver.session();

  session.run("CREATE (alice:PERSON {name: {nameParam} }) RETURN alice", {nameParam: 'Alice'})
    .then(function(result) {
      console.log('chears to the neo4j', result);
      session.close();
    })
    .catch(function(error) {
      console.log(error);
    })


  res.send('successful get request');
}
