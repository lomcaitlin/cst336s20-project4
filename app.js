var express = require("express");
var helmet = require("helmet");
var app = express();

app.use(express.static("public"));
app.use(helmet());
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    res.render("index", {active: "index"});
});

app.get("/html", function(req, res) {
    res.render("html", {active: "html"});
});

app.get("/css", function(req, res) {
    res.render("css", {active: "css"});
});

app.get("/js", function(req, res) {
    res.render("js", {active: "js"});
});

app.get("*", function(req, res) {
    res.send("error");
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Server is starting...");
});