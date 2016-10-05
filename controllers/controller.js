var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
	// res.send("this is the router hello world");
	res.sendFile("index.html");
});

router.get("/login", function(req, res){
	// res.send("this is the test router test")
	res.sendFile(__dirname + "/../test.html");
});

module.exports = router;