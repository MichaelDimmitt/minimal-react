// https://codeforgeek.com/2015/01/render-html-file-expressjs/
var express = require("express");
var app     = express();
app.use(express.static(__dirname))
// load initial index.html from current directory.
app.get('/',function(req,res){
 res.sendFile('/index.html');
});

app.listen(3000);

console.log("Running at Port 3000");
