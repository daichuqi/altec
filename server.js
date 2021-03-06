var express = require('express');
var path = require('path');
var server = express();
var PORT = process.env.PORT || 3000;
var favicon = require('serve-favicon');

server.use(favicon(path.join(__dirname, '/public', 'favicon.ico')));
server.use(express.static(__dirname + '/public'));


server.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

server.use('/images', express.static(path.join(__dirname, '/public/images')));

server.listen(PORT, function () {
  console.log('Example app listening on port '+ PORT);
});