//Create utility functions for making the requests to grapheneDB
var neo4j = require('neo4j-driver');

var graphenedbURL = process.env.GRAPHENEDB_BOLT_URL || "bolt://localhost:7474";
var graphenedbUser = process.env.GRAPHENEDB_BOLT_USER;
var graphenedbPass = process.env.GRAPHENEDB_BOLT_PASSWORD;

var driver = neo4j.driver(graphenedbURL, neo4j.auth.basic(graphenedbUser, graphenedbPass));

exports.getNodes = function(req, res, next) {
  var session = driver.session();

  session.run("CREATE (alice {name: {Alice} }) RETURN alice").subscribe({
    onComplete: function() {
      console.log('successful creation!');
      session.close();
    },
    onError: function(error) {
      console.log(error);
    }
  })
}
