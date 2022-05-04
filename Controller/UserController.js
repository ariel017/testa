"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDeliveryToClient = exports.getAdminNotificationToken = exports.updateNotificationToken = exports.getAddressOne = exports.addStreetAddress = exports.deleteStreetAddress = exports.getAddressesUser = exports.changeImageProfile = exports.changePassword = exports.getUserUpdated = exports.editProfile = exports.getUserById = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _mysql = _interopRequireDefault(require("../Database/mysql"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _path = _interopRequireDefault(require("path"));

var getUserById = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
    var res,
        uid,
        query,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = _args.length > 1 && _args[1] !== undefined ? _args[1] : _express.response;
            _context.prev = 1;
            uid = req.uid;
            _context.next = 5;
            return _mysql["default"].query("CALL SP_USER_BY_ID(?);", [uid]);

          case 5:
            query = _context.sent;
            res.json({
              resp: true,
              msg: 'Get profile',
              user: query[0][0]
            });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context.t0
            }));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));

  return function getUserById(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getUserById = getUserById;

var editProfile = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
    var res,
        _req$body,
        firstname,
        lastname,
        phone,
        _args2 = arguments;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : _express.response;
            _context2.prev = 1;
            _req$body = req.body, firstname = _req$body.firstname, lastname = _req$body.lastname, phone = _req$body.phone;
            _context2.next = 5;
            return _mysql["default"].query("CALL SP_UPDATE_PROFILE(?,?,?,?);", [req.uid, firstname, lastname, phone]);

          case 5:
            res.json({
              resp: true,
              msg: 'Updated Profile'
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

  return function editProfile(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.editProfile = editProfile;

var getUserUpdated = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req) {
    var res,
        userdb,
        user,
        _args3 = arguments;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            res = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : _express.response;
            _context3.prev = 1;
            _context3.next = 4;
            return _mysql["default"].query("CALL SP_USER_UPDATED(?);", [req.uid]);

          case 4:
            userdb = _context3.sent;
            user = userdb[0][0];
            res.json({
              resp: true,
              msg: 'User updated',
              user: {
                firstName: user.firstName,
                lastName: user.lastName,
                image: user.image,
                email: user.email,
                rol_id: user.rol_id
              }
            });
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context3.t0
            }));

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));

  return function getUserUpdated(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getUserUpdated = getUserUpdated;

var changePassword = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req) {
    var res,
        _req$body2,
        currentPassword,
        newPassword,
        passworddb,
        salt,
        pass,
        _args4 = arguments;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            res = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : _express.response;
            _context4.prev = 1;
            _req$body2 = req.body, currentPassword = _req$body2.currentPassword, newPassword = _req$body2.newPassword;
            _context4.next = 5;
            return _mysql["default"].query('SELECT passwordd FROM users WHERE persona_id = ?', [req.uid]);

          case 5:
            passworddb = _context4.sent;
            _context4.next = 8;
            return _bcrypt["default"].compareSync(currentPassword, passworddb[0].passwordd);

          case 8:
            if (_context4.sent) {
              _context4.next = 10;
              break;
            }

            return _context4.abrupt("return", res.status(401).json({
              resp: false,
              msg: 'Passwords do not match'
            }));

          case 10:
            salt = _bcrypt["default"].genSaltSync();
            pass = _bcrypt["default"].hashSync(newPassword, salt);
            _context4.next = 14;
            return _mysql["default"].query('UPDATE users SET passwordd = ? WHERE persona_id = ?', [pass, req.uid]);

          case 14:
            res.json({
              resp: true,
              msg: 'Password Changed'
            });
            _context4.next = 20;
            break;

          case 17:
            _context4.prev = 17;
            _context4.t0 = _context4["catch"](1);
            return _context4.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context4.t0
            }));

          case 20:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 17]]);
  }));

  return function changePassword(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

exports.changePassword = changePassword;

var changeImageProfile = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req) {
    var res,
        imagePath,
        imagedb,
        _args5 = arguments;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            res = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : _express.response;
            _context5.prev = 1;
            imagePath = req.file.filename;
            _context5.next = 5;
            return _mysql["default"].query('SELECT image FROM person WHERE uid = ?', [req.uid]);

          case 5:
            imagedb = _context5.sent;
            _context5.next = 8;
            return _fsExtra["default"].unlink(_path["default"].resolve('Uploads/Profile/' + imagedb[0].image));

          case 8:
            _context5.next = 10;
            return _mysql["default"].query('UPDATE person SET image = ? WHERE uid = ?', [imagePath, req.uid]);

          case 10:
            res.json({
              resp: true,
              msg: 'Picture changed'
            });
            _context5.next = 16;
            break;

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](1);
            return _context5.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context5.t0
            }));

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 13]]);
  }));

  return function changeImageProfile(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

exports.changeImageProfile = changeImageProfile;

var getAddressesUser = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req) {
    var res,
        addressesdb,
        _args6 = arguments;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            res = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : _express.response;
            _context6.prev = 1;
            _context6.next = 4;
            return _mysql["default"].query('SELECT id, name, phone, nit, email, street, reference, Latitude, Longitude FROM addresses WHERE persona_id = ?', [req.uid]);

          case 4:
            addressesdb = _context6.sent;
            res.json({
              resp: true,
              msg: 'List the Addresses',
              listAddresses: addressesdb
            });
            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](1);
            return _context6.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context6.t0
            }));

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 8]]);
  }));

  return function getAddressesUser(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getAddressesUser = getAddressesUser;

var deleteStreetAddress = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req) {
    var res,
        _args7 = arguments;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            res = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : _express.response;
            _context7.prev = 1;
            _context7.next = 4;
            return _mysql["default"].query('DELETE FROM addresses WHERE id = ? AND persona_id = ?', [req.params.idAddress, req.uid]);

          case 4:
            res.json({
              resp: true,
              msg: 'Street Address deleted'
            });
            _context7.next = 10;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](1);
            return _context7.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context7.t0
            }));

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 7]]);
  }));

  return function deleteStreetAddress(_x7) {
    return _ref7.apply(this, arguments);
  };
}();

exports.deleteStreetAddress = deleteStreetAddress;

var addStreetAddress = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req) {
    var res,
        imagePath,
        _req$body3,
        name,
        phone,
        nit,
        email,
        street,
        reference,
        latitude,
        longitude,
        image,
        _args8 = arguments;

    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            res = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : _express.response;
            console.log("test" + req.uid);
            imagePath = req.file.filename;
            _context8.prev = 3;
            _req$body3 = req.body, name = _req$body3.name, phone = _req$body3.phone, nit = _req$body3.nit, email = _req$body3.email, street = _req$body3.street, reference = _req$body3.reference, latitude = _req$body3.latitude, longitude = _req$body3.longitude, image = _req$body3.image;
            _context8.next = 7;
            return _mysql["default"].query('INSERT INTO addresses (name, phone, nit, email, street, reference, Latitude, Longitude, image, persona_id) VALUE (?,?,?,?,?,?,?,?,?,?)', [name, phone, nit, email, street, reference, latitude, longitude, imagePath, req.uid]);

          case 7:
            res.json({
              resp: true,
              msg: 'Street Address added successfully'
            });
            _context8.next = 13;
            break;

          case 10:
            _context8.prev = 10;
            _context8.t0 = _context8["catch"](3);
            return _context8.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context8.t0
            }));

          case 13:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[3, 10]]);
  }));

  return function addStreetAddress(_x8) {
    return _ref8.apply(this, arguments);
  };
}();

exports.addStreetAddress = addStreetAddress;

var getAddressOne = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req) {
    var res,
        addressdb,
        _args9 = arguments;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            res = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : _express.response;
            _context9.prev = 1;
            _context9.next = 4;
            return _mysql["default"].query('SELECT * FROM addresses WHERE persona_id = ? ORDER BY id DESC LIMIT 1', [req.uid]);

          case 4:
            addressdb = _context9.sent;
            res.json({
              resp: true,
              msg: 'One Address',
              address: addressdb[0]
            });
            _context9.next = 11;
            break;

          case 8:
            _context9.prev = 8;
            _context9.t0 = _context9["catch"](1);
            return _context9.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context9.t0
            }));

          case 11:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 8]]);
  }));

  return function getAddressOne(_x9) {
    return _ref9.apply(this, arguments);
  };
}();

exports.getAddressOne = getAddressOne;

var updateNotificationToken = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req) {
    var res,
        nToken,
        _args10 = arguments;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            res = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : _express.response;
            _context10.prev = 1;
            nToken = req.body.nToken;
            _context10.next = 5;
            return _mysql["default"].query('UPDATE users SET notification_token = ? WHERE persona_id = ?', [nToken, req.uid]);

          case 5:
            res.json({
              resp: true,
              msg: 'Token updated'
            });
            _context10.next = 11;
            break;

          case 8:
            _context10.prev = 8;
            _context10.t0 = _context10["catch"](1);
            return _context10.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context10.t0
            }));

          case 11:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[1, 8]]);
  }));

  return function updateNotificationToken(_x10) {
    return _ref10.apply(this, arguments);
  };
}();

exports.updateNotificationToken = updateNotificationToken;

var getAdminNotificationToken = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req) {
    var res,
        admisdb,
        tokens,
        _args11 = arguments;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            res = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : _express.response;
            _context11.prev = 1;
            _context11.next = 4;
            return _mysql["default"].query('SELECT notification_token FROM users WHERE rol_id = 1');

          case 4:
            admisdb = _context11.sent;
            tokens = [];
            admisdb.forEach(function (t) {
              tokens.push(t.notification_token);
            });
            res.json(tokens);
            _context11.next = 13;
            break;

          case 10:
            _context11.prev = 10;
            _context11.t0 = _context11["catch"](1);
            return _context11.abrupt("return", res.status(501).json({
              resp: false,
              msg: _context11.t0
            }));

          case 13:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[1, 10]]);
  }));

  return function getAdminNotificationToken(_x11) {
    return _ref11.apply(this, arguments);
  };
}();

exports.getAdminNotificationToken = getAdminNotificationToken;

var updateDeliveryToClient = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req) {
    var res,
        _args12 = arguments;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            res = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : _express.response;
            console.log(req.params.idPerson);
            _context12.prev = 2;
            _context12.next = 5;
            return _mysql["default"].query('UPDATE users SET rol_id = ? WHERE persona_id = ?', [2, req.params.idPerson]);

          case 5:
            res.json({
              resp: true,
              msg: 'Delivery To Client'
            });
            _context12.next = 11;
            break;

          case 8:
            _context12.prev = 8;
            _context12.t0 = _context12["catch"](2);
            return _context12.abrupt("return", res.status(501).json({
              resp: false,
              msg: _context12.t0
            }));

          case 11:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[2, 8]]);
  }));

  return function updateDeliveryToClient(_x12) {
    return _ref12.apply(this, arguments);
  };
}();

exports.updateDeliveryToClient = updateDeliveryToClient;