"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var product = _interopRequireWildcard(require("../Controller/ProductController"));

var _Multer = require("../Lib/Multer");

var _ValidateToken = require("../Middleware/ValidateToken");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)();
router.post('/add-new-products', [_ValidateToken.verifyToken, _Multer.upLoadsProducts.array('image')], product.addNewProduct);
router.get('/get-products-top-home', _ValidateToken.verifyToken, product.getProductsTopHome);
router.get('/get-images-products/:id', _ValidateToken.verifyToken, product.getImagesProducts);
router.get('/search-product-for-name/:nameProduct', _ValidateToken.verifyToken, product.searchProductForName);
router.get('/search-product-for-category/:idCategory', _ValidateToken.verifyToken, product.searchProductsForCategory);
router.get('/list-porducts-admin', _ValidateToken.verifyToken, product.listProductsAdmin);
router.put('/update-status-product', _ValidateToken.verifyToken, product.updateStatusProduct);
router["delete"]('/delete-product/:idProduct', _ValidateToken.verifyToken, product.deleteProduct);
var _default = router;
exports["default"] = _default;