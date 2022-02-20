/*var count=34;
count++;
console.log("Server is running");
console.log(count);


//CTL + SHIFT + C   

*/

var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package


var home=function(req, res){
    res.send("<h1>SDM End Module Exam</h1>"+
              "<hr/>"
              );
};
app.get("/",home);  // Request handler functions are registered

var server=app.listen(8085);
console.log("Server is running on port 8085");

