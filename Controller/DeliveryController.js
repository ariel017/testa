"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllDelivery = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _mysql = _interopRequireDefault(require("../Database/mysql"));

var getAllDelivery = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
    var res,
        deliverydb,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = _args.length > 1 && _args[1] !== undefined ? _args[1] : _express.response;
            _context.prev = 1;
            _context.next = 4;
            return _mysql["default"].query("CALL SP_ALL_DELIVERYS();");

          case 4:
            deliverydb = _context.sent;
            res.json({
              resp: true,
              msg: 'Get All Delivery',
              delivery: deliverydb[0]
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

  return function getAllDelivery(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllDelivery = getAllDelivery;