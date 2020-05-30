// HACK  A SAT tracker / MMS sender

var express = require('express');
var app = express();
var bodyparser = require('body-parser');
//might want to do this on the front end  for updateing purposes.
var fetch = require('node-fetch');
var path = require('path');

//use the render engine to
app.use(bodyparser).renderengine;
app.use('/views/index.ejs');

app.get('/', function(request, response){
  console.log('got request on port 3000');
  response.send(index.ejs);

})
//start the server on port 3000
app.listen(3000, function(request, response){
    console.log('you are now rocking with localhost and port 3000');
});
