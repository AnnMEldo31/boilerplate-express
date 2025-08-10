let express = require("express");
let app = express();

console.log("Hello World");

app.get("/", function (req, res) {
  absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
});

publicAbsolutePath = __dirname + '/public';
app.use("/public", express.static(publicAbsolutePath))

app.get("/json", function (req, res) {
  res.json({"message": "Hello json"});
});

module.exports = app;
