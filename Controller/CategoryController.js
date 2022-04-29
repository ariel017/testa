"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllCategories = exports.addCategories = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _mysql = _interopRequireDefault(require("../Database/mysql"));

var addCategories = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
    var res,
        _req$body,
        category,
        description,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = _args.length > 1 && _args[1] !== undefined ? _args[1] : _express.response;
            _context.prev = 1;
            _req$body = req.body, category = _req$body.category, description = _req$body.description;
            _context.next = 5;
            return _mysql["default"].query("CALL SP_ADD_CATEGORY(?,?);", [category, description]);

          case 5:
            res.json({
              resp: true,
              msg: 'Category added successfully'
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context.t0
            }));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function addCategories(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.addCategories = addCategories;

var getAllCategories = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
    var res,
        category,
        _args2 = arguments;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : _express.response;
            _context2.prev = 1;
            _context2.next = 4;
            return _mysql["default"].query('SELECT * FROM categories');

          case 4:
            category = _context2.sent;
            res.json({
              resp: true,
              msg: 'All Categories',
              categories: category
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context2.t0
            }));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function getAllCategories(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAllCategories = getAllCategories;