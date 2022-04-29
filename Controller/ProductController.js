"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProduct = exports.updateStatusProduct = exports.listProductsAdmin = exports.searchProductsForCategory = exports.searchProductForName = exports.getImagesProducts = exports.getProductsTopHome = exports.addNewProduct = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _mysql = _interopRequireDefault(require("../Database/mysql"));

var addNewProduct = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
    var res,
        _req$body,
        name,
        description,
        price,
        category,
        rows,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = _args.length > 1 && _args[1] !== undefined ? _args[1] : _express.response;
            _context.prev = 1;
            _req$body = req.body, name = _req$body.name, description = _req$body.description, price = _req$body.price, category = _req$body.category;
            _context.next = 5;
            return _mysql["default"].query('INSERT INTO products (nameProduct, description, price, category_id) VALUE (?,?,?,?)', [name, description, price, category]);

          case 5:
            rows = _context.sent;
            req.files.forEach(function (image) {
              _mysql["default"].query('INSERT INTO imageProduct (picture, product_id) value (?,?)', [image.filename, rows.insertId]);
            });
            res.json({
              resp: true,
              msg: 'Product added Successfully'
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

  return function addNewProduct(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.addNewProduct = addNewProduct;

var getProductsTopHome = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
    var res,
        productsdb,
        _args2 = arguments;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : _express.response;
            _context2.prev = 1;
            _context2.next = 4;
            return _mysql["default"].query("CALL SP_GET_PRODUCTS_TOP();");

          case 4:
            productsdb = _context2.sent;
            res.json({
              resp: true,
              msg: 'Top 10 Products',
              productsdb: productsdb[0]
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

  return function getProductsTopHome(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getProductsTopHome = getProductsTopHome;

var getImagesProducts = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req) {
    var res,
        imageProductdb,
        _args3 = arguments;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            res = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : _express.response;
            _context3.prev = 1;
            _context3.next = 4;
            return _mysql["default"].query('SELECT * FROM imageProduct WHERE product_id = ?', [req.params.id]);

          case 4:
            imageProductdb = _context3.sent;
            res.json({
              resp: true,
              msg: 'Get Images Products',
              imageProductdb: imageProductdb
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

  return function getImagesProducts(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getImagesProducts = getImagesProducts;

var searchProductForName = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req) {
    var res,
        productdb,
        _args4 = arguments;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            res = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : _express.response;
            _context4.prev = 1;
            _context4.next = 4;
            return _mysql["default"].query("CALL SP_SEARCH_PRODUCT(?);", [req.params.nameProduct]);

          case 4:
            productdb = _context4.sent;
            res.json({
              resp: true,
              msg: 'Search products',
              productsdb: productdb[0]
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

  return function searchProductForName(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

exports.searchProductForName = searchProductForName;

var searchProductsForCategory = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req) {
    var res,
        productdb,
        _args5 = arguments;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            res = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : _express.response;
            _context5.prev = 1;
            _context5.next = 4;
            return _mysql["default"].query("CALL SP_SEARCH_FOR_CATEGORY(?);", [req.params.idCategory]);

          case 4:
            productdb = _context5.sent;
            res.json({
              resp: true,
              msg: 'list Products for id Category',
              productsdb: productdb[0]
            });
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            return _context5.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context5.t0
            }));

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 8]]);
  }));

  return function searchProductsForCategory(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

exports.searchProductsForCategory = searchProductsForCategory;

var listProductsAdmin = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req) {
    var res,
        productsdb,
        _args6 = arguments;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            res = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : _express.response;
            _context6.prev = 1;
            _context6.next = 4;
            return _mysql["default"].query("CALL SP_LIST_PRODUCTS_ADMIN();");

          case 4:
            productsdb = _context6.sent;
            res.json({
              resp: true,
              msg: 'Top 10 Products',
              productsdb: productsdb[0]
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

  return function listProductsAdmin(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

exports.listProductsAdmin = listProductsAdmin;

var updateStatusProduct = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req) {
    var res,
        _req$body2,
        status,
        idProduct,
        _args7 = arguments;

    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            res = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : _express.response;
            _context7.prev = 1;
            _req$body2 = req.body, status = _req$body2.status, idProduct = _req$body2.idProduct;
            _context7.next = 5;
            return _mysql["default"].query('UPDATE products SET status = ? WHERE id = ?', [parseInt(status), parseInt(idProduct)]);

          case 5:
            res.json({
              resp: true,
              msg: 'Product updated'
            });
            _context7.next = 11;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](1);
            return _context7.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context7.t0
            }));

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 8]]);
  }));

  return function updateStatusProduct(_x7) {
    return _ref7.apply(this, arguments);
  };
}();

exports.updateStatusProduct = updateStatusProduct;

var deleteProduct = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req) {
    var res,
        _args8 = arguments;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            res = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : _express.response;
            _context8.prev = 1;
            _context8.next = 4;
            return _mysql["default"].query('DELETE FROM imageProduct WHERE product_id = ?', [req.params.idProduct]);

          case 4:
            _context8.next = 6;
            return _mysql["default"].query('DELETE FROM products WHERE id = ?', [req.params.idProduct]);

          case 6:
            res.json({
              resp: true,
              msg: 'Product deleted successfully'
            });
            _context8.next = 12;
            break;

          case 9:
            _context8.prev = 9;
            _context8.t0 = _context8["catch"](1);
            return _context8.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context8.t0
            }));

          case 12:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 9]]);
  }));

  return function deleteProduct(_x8) {
    return _ref8.apply(this, arguments);
  };
}();

exports.deleteProduct = deleteProduct;