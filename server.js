var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var path = require("path");
var methodOverride = require('method-override');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// app.use(express.static(process.cwd() + "/public"));
app.use(express.static(path.join(__dirname, 'public')));

var x = 10
app.get('/', function(req,res){
	if (x === 10){
		console.log("redirecting to main page");
		res.redirect("/main");
	}
	else{
		console.log("redirecting to login");
		res.redirect("/login");
	}
});

app.get("/login", function(req,res){
	res.sendFile(path.join(__dirname, "login.html"));
});

app.post("/login", function(req,res){
	console.log(req.body);
	res.send("password");
});

app.get("/main", function(req,res){
	res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(PORT, function(){
	console.log("listening on port " + PORT);
});



