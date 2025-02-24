"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootSelector = exports.rentSelector = exports.paketSelector = exports.optionSelector = void 0;
var _interface = require("./interface");
// ___ root уровень селектора
var rootSelector = exports.rootSelector = [{
  id: 0,
  value: "Пакет",
  label: "Пакет",
  marker: "paket"
}, {
  id: 1,
  value: "Аренда",
  label: "Аренда",
  marker: "arenda"
}, {
  id: 2,
  value: "Опция",
  label: "Опция",
  marker: "option"
}];

// ___ lvl2 выбор типа услуги
// - пакет
var paketSelector = exports.paketSelector = [{
  id: 0,
  value: "Пакет Light",
  label: "Light",
  marker: "Light",
  prePrice: 0,
  min: 30,
  cost: 5000,
  type: ""
}, {
  id: 1,
  value: "Пакет Family",
  label: "Family",
  marker: "Family",
  prePrice: 0,
  min: 55,
  cost: 8000,
  type: ""
}];
// - опция
var optionSelector = exports.optionSelector = [{
  id: 0,
  value: "Купание",
  label: "Купание",
  marker: "swim",
  prePrice: 0,
  min: 0,
  cost: 2000,
  type: ""
}];
// - опция
var rentSelector = exports.rentSelector = [{
  id: 0,
  value: "Аренда SOFT",
  label: "Аренда SOFT",
  marker: "soft",
  prePrice: 0,
  min: 60,
  cost: 2200,
  type: ""
}];