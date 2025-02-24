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
  type: "",
  pay: {
    studio: 2500,
    photo: 2500,
    makeup: 0,
    cake: 0,
    decor: 0,
    clean: 0
  }
}, {
  id: 1,
  value: "Пакет Family",
  label: "Пакет Family",
  marker: "Family",
  prePrice: 0,
  min: 55,
  cost: 8000,
  type: "",
  pay: {
    studio: 4000,
    photo: 4000,
    makeup: 0,
    cake: 0,
    decor: 0,
    clean: 0
  }
}, {
  id: 2,
  value: "Пакет Тортик Макси",
  label: "Пакет Тортик Макси",
  marker: "tortMaksi",
  prePrice: 0,
  min: 55,
  cost: 12000,
  type: "",
  pay: {
    studio: 3000,
    photo: 4000,
    makeup: 0,
    cake: 1500,
    decor: 2500,
    clean: 500
  }
}, {
  id: 3,
  value: "Пакет Тортик Мини",
  label: "Пакет Тортик Мини",
  marker: "tortMini",
  prePrice: 0,
  min: 30,
  cost: 6000,
  type: "",
  pay: {
    studio: 3000,
    photo: 2500,
    makeup: 0,
    cake: 0,
    decor: 1000,
    clean: 0
  }
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
  type: "",
  halphPrice: 1900
}, {
  id: 1,
  value: "Аренда FOCUS",
  label: "Аренда FOCUS",
  marker: "focus",
  prePrice: 0,
  min: 60,
  cost: 1600,
  type: "",
  halphPrice: 1400
}, {
  id: 2,
  value: "Аренда WHITE",
  label: "Аренда WHITE",
  marker: "white",
  prePrice: 0,
  min: 60,
  cost: 1800,
  type: "",
  halphPrice: 1600
}, {
  id: 3,
  value: "Аренда OLFI",
  label: "Аренда OLFI",
  marker: "olfi",
  prePrice: 0,
  min: 60,
  cost: 1600,
  type: "",
  halphPrice: 1400
}, {
  id: 4,
  value: "Аренда BLOOM",
  label: "Аренда BLOOM",
  marker: "bloom",
  prePrice: 0,
  min: 60,
  cost: 1400,
  type: "",
  halphPrice: 1200
}, {
  id: 5,
  value: "Аренда ЗАЛ-ФОН",
  label: "Аренда ЗАЛ-ФОН",
  marker: "bg",
  prePrice: 0,
  min: 60,
  cost: 1000,
  type: "",
  halphPrice: 800
}, {
  id: 6,
  value: "Аренда 'ЛОКАЦИЯ ПОД КЛЮЧ'",
  label: "Аренда 'ЛОКАЦИЯ ПОД КЛЮЧ'",
  marker: "key",
  prePrice: 0,
  min: 60,
  cost: 3600,
  type: "",
  halphPrice: 1400
}, {
  id: 6,
  value: "Аренда TOTAL-WHITE",
  label: "Аренда TOTAL-WHITE",
  marker: "totalWhite",
  prePrice: 0,
  min: 60,
  cost: 1400,
  type: "",
  halphPrice: 1400
}];