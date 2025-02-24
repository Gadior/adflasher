"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _task4__hearts = _interopRequireDefault(require("./slices/task4__hearts"));
var _task4__addPartners = _interopRequireDefault(require("./slices/task4__addPartners"));
var _dataCntl = _interopRequireDefault(require("./slices/page5/dataCntl"));
var _dataCntl2 = _interopRequireDefault(require("./slices/page7/dataCntl"));
var _dataCntl3 = _interopRequireDefault(require("./slices/page11/dataCntl"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// ~ Store
var store = (0, _toolkit.configureStore)({
  reducer: {
    counter: _task4__hearts.default,
    newList: _task4__addPartners.default,
    page5_dataCntl: _dataCntl.default,
    page7_dataCntl: _dataCntl2.default,
    page11_dataCntl: _dataCntl3.default
  }
});

// ~ типы для Store
var _default = exports.default = store;