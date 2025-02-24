import { int__rootSelect, int__lvl2Selector } from "./interface";

// ___ root уровень селектора
export const rootSelector: int__rootSelect[] = [
  { id: 0, value: "Пакет", label: "Пакет", marker: "paket" },
  { id: 1, value: "Аренда", label: "Аренда", marker: "arenda" },
  { id: 2, value: "Опция", label: "Опция", marker: "option" },
];

// ___ lvl2 выбор типа услуги
// - пакет
export const paketSelector: int__lvl2Selector[] = [
  {
    id: 0,
    value: "Пакет Light",
    label: "Light",
    marker: "Light",
    prePrice: 0,
    min: 30,
    cost: 5000,
    type: "",
  },
  {
    id: 1,
    value: "Пакет Family",
    label: "Family",
    marker: "Family",
    prePrice: 0,
    min: 55,
    cost: 8000,
    type: "",
  },
];
// - опция
export const optionSelector: int__lvl2Selector[] = [
  {
    id: 0,
    value: "Купание",
    label: "Купание",
    marker: "swim",
    prePrice: 0,
    min: 0,
    cost: 2000,
    type: "",
  },
];
// - опция
export const rentSelector: int__lvl2Selector[] = [
  {
    id: 0,
    value: "Аренда SOFT",
    label: "Аренда SOFT",
    marker: "soft",
    prePrice: 0,
    min: 60,
    cost: 2200,
    type: "",
  },
];
