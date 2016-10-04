var express = require("express");
var morgan = require("morgan");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(morgan("dev"));


app.get("/", function(req, res){
	res.send("hello world!");
});

app.listen(PORT, function(){
	console.log("listening on port " + PORT);
});