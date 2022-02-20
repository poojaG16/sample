var express = require("express");
var app = express();

var logger = function(req,res,next){
    next();
}

var home=function(req,res){
    res.send("<h1>Welcome To Web</h1>"+"<hr>"+"<h3>SDMEnd Module Exam</h3>");
};

app.get("/",home);

app.listen(8085);