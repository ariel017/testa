"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStatusToDelivered = exports.updateStatusToOntheWay = exports.getOrdersByDelivery = exports.updateStatusToDispatched = exports.getDetailsOrderById = exports.getOrdersByStatus = exports.addNewOrders = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _mysql = _interopRequireDefault(require("../Database/mysql"));

var addNewOrders = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
    var res,
        _req$body,
        uidAddress,
        total,
        typePayment,
        products,
        orderdb,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = _args.length > 1 && _args[1] !== undefined ? _args[1] : _express.response;
            _context.prev = 1;
            _req$body = req.body, uidAddress = _req$body.uidAddress, total = _req$body.total, typePayment = _req$body.typePayment, products = _req$body.products;
            _context.next = 5;
            return _mysql["default"].query('INSERT INTO orders (client_id, address_id, amount, pay_type) VALUES (?,?,?,?)', [req.uid, uidAddress, total, typePayment]);

          case 5:
            orderdb = _context.sent;
            products.forEach(function (o) {
              _mysql["default"].query('INSERT INTO orderDetails (order_id, product_id, quantity, price) VALUES (?,?,?,?)', [orderdb.insertId, o.uidProduct, o.quantity, o.quantity * o.price]);
            });
            res.json({
              resp: true,
              msg: 'New Order added successfully'
            });
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context.t0
            }));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
  }));

  return function addNewOrders(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.addNewOrders = addNewOrders;

var getOrdersByStatus = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
    var res,
        ordersdb,
        _args2 = arguments;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : _express.response;
            _context2.prev = 1;
            console.log(req.params.statusOrder);
            _context2.next = 5;
            return _mysql["default"].query("CALL SP_ALL_ORDERS_STATUS(?);", [req.params.statusOrder]);

          case 5:
            ordersdb = _context2.sent;
            res.json({
              resp: true,
              msg: 'Orders by ' + req.params.statusOrder,
              ordersResponse: ordersdb[0]
            });
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context2.t0
            }));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));

  return function getOrdersByStatus(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getOrdersByStatus = getOrdersByStatus;

var getDetailsOrderById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req) {
    var res,
        detailOrderdb,
        _args3 = arguments;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            res = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : _express.response;
            _context3.prev = 1;
            _context3.next = 4;
            return _mysql["default"].query("CALL SP_ORDER_DETAILS(?);", [req.params.idOrderDetails]);

          case 4:
            detailOrderdb = _context3.sent;
            res.json({
              resp: true,
              msg: 'Order details by ' + req.params.idOrderDetails,
              detailsOrder: detailOrderdb[0]
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context3.t0
            }));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));

  return function getDetailsOrderById(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getDetailsOrderById = getDetailsOrderById;

var updateStatusToDispatched = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req) {
    var res,
        _req$body2,
        idDelivery,
        idOrder,
        _args4 = arguments;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            res = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : _express.response;
            _context4.prev = 1;
            _req$body2 = req.body, idDelivery = _req$body2.idDelivery, idOrder = _req$body2.idOrder;
            _context4.next = 5;
            return _mysql["default"].query('UPDATE orders SET status = ?, delivery_id = ? WHERE id = ?', ['ASIGNADO', idDelivery, idOrder]);

          case 5:
            res.json({
              resp: true,
              msg: 'Orden ASIGNADO'
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            return _context4.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context4.t0
            }));

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));

  return function updateStatusToDispatched(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateStatusToDispatched = updateStatusToDispatched;

var getOrdersByDelivery = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req) {
    var res,
        ordersDeliverydb,
        _args5 = arguments;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            res = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : _express.response;
            _context5.prev = 1;
            console.log(req.params.idClient);
            console.log(req.params.statusOrder);
            _context5.next = 6;
            return _mysql["default"].query("CALL SP_ORDERS_BY_DELIVERY(?,?,?);", [req.uid, req.params.statusOrder, req.params.idClient]);

          case 6:
            ordersDeliverydb = _context5.sent;
            res.json({
              resp: true,
              msg: 'All Orders By Delivery',
              ordersResponse: ordersDeliverydb[0]
            });
            _context5.next = 13;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](1);
            return _context5.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context5.t0
            }));

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 10]]);
  }));

  return function getOrdersByDelivery(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getOrdersByDelivery = getOrdersByDelivery;

var updateStatusToOntheWay = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req) {
    var res,
        _req$body3,
        latitude,
        longitude,
        stateDelivery,
        _args6 = arguments;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            res = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : _express.response;
            _context6.prev = 1;
            _req$body3 = req.body, latitude = _req$body3.latitude, longitude = _req$body3.longitude, stateDelivery = _req$body3.stateDelivery;
            _context6.next = 5;
            return _mysql["default"].query('UPDATE orders SET status = ?, latitude = ?, longitude = ? WHERE id = ?', [stateDelivery, latitude, longitude, req.params.idOrder]);

          case 5:
            res.json({
              resp: true,
              msg: 'ON WAY'
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

  return function updateStatusToOntheWay(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateStatusToOntheWay = updateStatusToOntheWay;

var updateStatusToDelivered = /*#__PURE__*/function () {
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
            return _mysql["default"].query('UPDATE orders SET status = ? WHERE id = ?', ['DELIVERED', req.params.idOrder]);

          case 4:
            res.json({
              resp: true,
              msg: 'ORDER DELIVERED'
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

  return function updateStatusToDelivered(_x7) {
    return _ref7.apply(this, arguments);
  };
}();

exports.updateStatusToDelivered = updateStatusToDelivered;