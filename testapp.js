var express = require('express');
var app = express();

app.get('/', function(req, res){
    console.log(req.query);
    console.log(typeof req.query );
    res.send('query: ' + JSON.stringify(req.query));
});

app.listen(4000);
