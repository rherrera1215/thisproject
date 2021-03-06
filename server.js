const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.set('port', 3000);

app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());


// app.use(express.static(_dirname+'/Public'));

app.use(express.static(__dirname + "/view"));
app.use(express.static(__dirname + "/node_modules"));
app.use(express.static(__dirname + "/controllers"));

app.get('/', function (req, res) {
  res.send('testing port 3000! Its working!!!!')
});

app.get('/', function (req, res) {
  res.sendFile(_dirname +'/Public/index.html');
});

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('running on server ' + port);
});
// app.listen(3000);
// console.log("server running on port 3000");

exports = module.express = app;
