"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renewTokenLogin = exports.loginController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _mysql = _interopRequireDefault(require("../Database/mysql"));

var _JwToken = require("../Lib/JwToken");

var loginController = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
    var res,
        _req$body,
        email,
        password,
        validatedEmail,
        userdb,
        user,
        token,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = _args.length > 1 && _args[1] !== undefined ? _args[1] : _express.response;
            _context.prev = 1;
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            console.log(email + "email and password" + password);
            _context.next = 6;
            return _mysql["default"].query('SELECT email FROM users WHERE email = ?', [email]);

          case 6:
            validatedEmail = _context.sent;

            if (!(validatedEmail.length == 0)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              resp: false,
              msg: 'Wrong Credentials'
            }));

          case 9:
            _context.next = 11;
            return _mysql["default"].query("CALL SP_LOGIN(?);", [email]);

          case 11:
            userdb = _context.sent;
            user = userdb[0][0];
            _context.next = 15;
            return _bcrypt["default"].compareSync(password, user.passwordd);

          case 15:
            if (_context.sent) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", res.status(401).json({
              resp: false,
              msg: 'Wrong Credentials'
            }));

          case 17:
            _context.next = 19;
            return (0, _JwToken.generateJsonWebToken)(user.uid);

          case 19:
            token = _context.sent;
            res.json({
              resp: true,
              msg: 'Welcome to Frave Restaurant',
              user: {
                uid: user.uid,
                firstName: user.firstName,
                lastName: user.lastName,
                image: user.image,
                email: user.email,
                rol_id: user.rol_id,
                notification_token: user.notification_token
              },
              token: token
            });
            _context.next = 26;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context.t0
            }));

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 23]]);
  }));

  return function loginController(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.loginController = loginController;

var renewTokenLogin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
    var res,
        token,
        userdb,
        user,
        _args2 = arguments;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : _express.response;
            _context2.prev = 1;
            _context2.next = 4;
            return (0, _JwToken.generateJsonWebToken)(req.uid);

          case 4:
            token = _context2.sent;
            _context2.next = 7;
            return _mysql["default"].query("CALL SP_RENEWTOKENLOGIN(?);", [req.uid]);

          case 7:
            userdb = _context2.sent;
            user = userdb[0][0];
            res.json({
              resp: true,
              msg: 'Welcome to Frave Restaurant',
              user: {
                uid: user.uid,
                firstName: user.firstName,
                lastName: user.lastName,
                image: user.image,
                phone: user.phone,
                email: user.email,
                rol_id: user.rol_id,
                notification_token: user.notification_token
              },
              token: token
            });
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](1);
            res.status(500).json({
              resp: false,
              msg: _context2.t0
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 12]]);
  }));

  return function renewTokenLogin(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.renewTokenLogin = renewTokenLogin;