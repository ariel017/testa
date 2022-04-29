"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerDelivery = exports.registerClient = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _mysql = _interopRequireDefault(require("../Database/mysql"));

var registerClient = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
    var res,
        _req$body,
        firstname,
        lastname,
        phone,
        email,
        password,
        notification_token,
        imagePath,
        salt,
        pass,
        validatedEmail,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = _args.length > 1 && _args[1] !== undefined ? _args[1] : _express.response;
            _req$body = req.body, firstname = _req$body.firstname, lastname = _req$body.lastname, phone = _req$body.phone, email = _req$body.email, password = _req$body.password, notification_token = _req$body.notification_token;
            imagePath = req.file.filename;
            _context.prev = 3;
            salt = _bcrypt["default"].genSaltSync();
            pass = _bcrypt["default"].hashSync(password, salt);
            _context.next = 8;
            return _mysql["default"].query('SELECT email FROM users WHERE email = ?', [email]);

          case 8:
            validatedEmail = _context.sent;

            if (!(validatedEmail.length > 0)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.status(401).json({
              resp: false,
              msg: 'Email already exists'
            }));

          case 11:
            _context.next = 13;
            return _mysql["default"].query("CALL SP_REGISTER(?,?,?,?,?,?,?,?);", [firstname, lastname, phone, imagePath, email, pass, 2, notification_token]);

          case 13:
            res.json({
              resp: true,
              msg: 'Client successfully registered'
            });
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](3);
            return _context.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context.t0
            }));

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 16]]);
  }));

  return function registerClient(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.registerClient = registerClient;

var registerDelivery = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
    var res,
        _req$body2,
        firstname,
        lastname,
        phone,
        email,
        password,
        notification_token,
        imagePath,
        validatedEmail,
        salt,
        pass,
        _args2 = arguments;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : _express.response;
            _context2.prev = 1;
            _req$body2 = req.body, firstname = _req$body2.firstname, lastname = _req$body2.lastname, phone = _req$body2.phone, email = _req$body2.email, password = _req$body2.password, notification_token = _req$body2.notification_token;
            imagePath = req.file.filename;
            _context2.next = 6;
            return _mysql["default"].query('SELECT email FROM users WHERE email = ?', [email]);

          case 6:
            validatedEmail = _context2.sent;

            if (!(validatedEmail.length > 0)) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              resp: false,
              msg: 'Email already exists'
            }));

          case 9:
            salt = _bcrypt["default"].genSaltSync();
            pass = _bcrypt["default"].hashSync(password, salt);
            _context2.next = 13;
            return _mysql["default"].query("CALL SP_REGISTER(?,?,?,?,?,?,?,?);", [firstname, lastname, phone, imagePath, email, pass, 3, notification_token]);

          case 13:
            res.json({
              resp: true,
              msg: 'Devlivery successfully registered'
            });
            _context2.next = 19;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context2.t0
            }));

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 16]]);
  }));

  return function registerDelivery(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.registerDelivery = registerDelivery;