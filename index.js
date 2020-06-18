var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(express.static("public_html"));

app.listen(3000, function () {
  console.log("Webserver Running at Http://localhost:3000");
  console.log("Type Ctrl-C to shutdown server.");
});
