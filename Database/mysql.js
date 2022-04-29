"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mysql = _interopRequireDefault(require("mysql"));

var _util = require("util");

var pool = _mysql["default"].createPool({
  host: 'sql5.freemysqlhosting.net',
  user: 'sql5488861',
  password: "mIz2U9QEY4",
  database: 'sql5488861'
});

pool.getConnection(function (err, connection) {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') console.log('DATABASE CONNECTION WAS CLOSED');
    if (err.code === 'ER_CON_COUNT_ERROR') console.log('DATABASE HAS TO MANY CONNECTIONS');
    if (err.code === 'ECONNREFUSED') console.log('DATABASE CONNECTION WAS REFUSED');
  }

  if (connection) connection.release();
  console.log('DataBase is connected to ' + process.env.DB_DATABASE);
  return;
});
pool.query = (0, _util.promisify)(pool.query);
var _default = pool;
exports["default"] = _default;