var express = require("express");
var app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/html", function(req, res) {
    res.render("html");
});

app.get("/css", function(req, res) {
    res.render("css");
});

app.get("/js", function(req, res) {
    res.render("js");
});

app.get("*", function(req, res) {
    res.send("error");
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Server is starting...");
});