"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upLoadsProducts = exports.upLoadsProfile = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _path = _interopRequireDefault(require("path"));

var storageProfile = _multer["default"].diskStorage({
  destination: function destination(req, res, cb) {
    cb(null, 'src/Uploads/Profile');
  },
  filename: function filename(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + _path["default"].extname(file.originalname));
  }
});

var upLoadsProfile = (0, _multer["default"])({
  storage: storageProfile
});
exports.upLoadsProfile = upLoadsProfile;

var storageProducts = _multer["default"].diskStorage({
  destination: function destination(req, res, cb) {
    cb(null, 'src/Uploads/Products');
  },
  filename: function filename(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + _path["default"].extname(file.originalname));
  }
});

var upLoadsProducts = (0, _multer["default"])({
  storage: storageProducts
});
exports.upLoadsProducts = upLoadsProducts;