var express = require("express");
var app = express();


var home=function(req,res){
    res.send("<h1>Welcome To Web</h1>"+"<hr>"+"<h3>SDMEnd Module Exam</h3>");
};

app.get("/",home);

app.listen(3000);