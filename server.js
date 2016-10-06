var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var path = require("path");
var methodOverride = require('method-override');
var firebase = require('firebase');

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

// firebase
var config = {
apiKey: "AIzaSyBVypMWRukHTUVkmzKi-ALWVgkZN18mi8w",
authDomain: "stride-bc2f4.firebaseapp.com",
databaseURL: "https://stride-bc2f4.firebaseio.com",
storageBucket: "stride-bc2f4.appspot.com"
};

firebase.initializeApp(config);


/////////////////////////////////////////////////////////
//Routes
/////////////////////////////////////////////////////////
app.get('/', function(req,res){

	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			res.redirect("/main");
		} else {
			res.redirect("/login");
		}
	});
});

app.get("/login", function(req,res){
	res.sendFile(path.join(__dirname, "login.html"));
});

app.post("/login", function(req,res){
	var email = req.body.email;
	var password = req.body.password;
	firebase.auth().signInWithEmailAndPassword(email, password)
	.catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;

		console.log(errorCode);

		res.send("error");
		// ...
	})
	.then(function(result){
		// console.log(result);
		res.send(result);
	});
});

app.get("/main", function(req,res){

	var user = firebase.auth().currentUser;
	console.log(user);
	if (user == null){
		res.redirect("/login");
	}else{
		res.sendFile(path.join(__dirname, "./index.html"));
	}	
});


// Initialize
app.listen(PORT, function(){
	console.log("listening on port " + PORT);
});



