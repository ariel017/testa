"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _App = _interopRequireDefault(require("./App"));

_App["default"].listen(3000, function () {
  return console.log('Server on port: ' + process.env.APP_PORT);
});