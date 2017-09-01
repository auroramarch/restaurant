var express= require("express");
var app= express();
var fs = require ("fs");
var comida = require("./comida.json");

app.get("/comida", function(req, res){
	res.json (comida);
})

app.listen(3000);