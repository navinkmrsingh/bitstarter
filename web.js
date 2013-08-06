var express = require('express');
var fs = require('fs');

var app = express(express.logger());
var fle = 'index.html';
var buf = fs.readFileSync(fle,'utf-8');
var str = buf.toString();

app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
