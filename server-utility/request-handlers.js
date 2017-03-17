//Create utility functions for making the requests to grapheneDB
var neo4j = require('neo4j-driver').v1;

var graphenedbURL = process.env.URL || "http://localhost:7474";
var graphenedbUser = process.env.USN || "neo4j";
var graphenedbPass = process.env.PW || "neo4j";

var driver = neo4j.driver(graphenedbURL, neo4j.auth.basic(graphenedbUser, graphenedbPass));

var getNodes = function(req, res, next) {
  var session = driver.session();
  console.log('inside the getNodes, driver', session);
  session.run("MATCH (n) RETURN n LIMIT 100")
    .then(function(result) {
      session.close();
      res.json(result);
    })
    .catch(function(error) {
      console.log(error);
    })
}

var generateCypherQuery = function(reqBody) {
  //take the request body from the client
  //parse out the good stuff
  //return the cypher query as string

  //ex: "CREATE (alice:PERSON {name: {nameParam} }) RETURN alice", {nameParam: 'Alice'}"
}

var postNode = function(req, res, next) {
  var session = driver.session();

  session.run("CREATE (alice:NUMBER {value: {num} })", {num: Math.random() * 1000})
    .then(function(result) {
      session.close();
      res.status(201).send('successful post')
    })
    .catch(function(error) {
      console.log(error);
    })
}




exports.getNodes = getNodes;
exports.postNode = postNode;
