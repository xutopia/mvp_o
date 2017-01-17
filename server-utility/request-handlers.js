//Create utility functions for making the requests to grapheneDB
var neo4j = require('neo4j-driver').v1;
var neo4jCreds = require('../graphene_creds');

var graphenedbURL = neo4jCreds.URL || "http://localhost:7474";
var graphenedbUser = neo4jCreds.USN || "neo4j";
var graphenedbPass = neo4jCreds.PW || "neo4j";

var driver = neo4j.driver(graphenedbURL, neo4j.auth.basic(graphenedbUser, graphenedbPass));

var getNodes = function(req, res, next) {
  var session = driver.session();

  session.run("MATCH (n) RETURN n LIMIT 100")
    .then(function(result) {
      console.log('successful fetching of the nodes', result)
      // console.log('chears to the neo4j', result);
      // console.log('here are the results from a get all request: ', result)
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

  console.log('what is the req.body from axios post request???', req.body)
  var CQ = generateCypherQuery(req.body);
  console.log('what is the CQQQQ????', CQ)
  session.run(CQ)
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
