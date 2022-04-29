"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _expressValidator = require("express-validator");

var _default = validationRequest = function validationRequest(req, res, next) {
  var errors = (0, _expressValidator.validationResult)(req);

  if (!errors.isEmpty) {
    return res.status(400).json({
      resp: false,
      errors: errors.mapped()
    });
  }

  next();
};

exports["default"] = _default;