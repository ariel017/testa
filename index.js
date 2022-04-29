"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var app = (0, _express["default"])();
app.get('/', function (req, res) {
  res.status(200).json({
    message: "Welcome to Node.js & Express"
  });
});
app.listen(process.env.PORT || 3000, function () {
  return console.log("Listening to port 3000");
});