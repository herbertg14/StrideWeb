var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


app.use(express.static(process.cwd() + "/public"));


app.get("/", function(req, res){
	// res.redirect("/login");
	res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/login", function(req,res){
	// res.sendFile(__dirname + "/test.html");
	res.sendFile(path.join(__dirname + "/public/login.html"));
});

app.get("/main", function(req, res){
	res.sendFile("index.html");
});

// var routes = require('./controllers/controller.js');
// app.use("/", routes);

app.listen(PORT, function(){
	console.log("listening on port " + PORT);
});



