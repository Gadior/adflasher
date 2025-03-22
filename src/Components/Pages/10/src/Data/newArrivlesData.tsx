import { Card } from "../Widjet/ProductsList/interface";
// карточки поступлений
import __ar1 from "../Shared/assets/__ar1.jpg";
import __ar2 from "../Shared/assets/__ar2.jpg";
import __ar3 from "../Shared/assets/__ar3.jpg";
import __ar4 from "../Shared/assets/__ar4.jpg";

export const cards: Card[] = [
  {
    id: 0,
    sourceImage: __ar1,
    name: "T-SHIRT WITH TAPE DETAILS",
    alt: "T-SHIRT WITH TAPE DETAILS",
    price: 120,
  },
  {
    id: 1,
    sourceImage: __ar2,
    name: "SKINNY FIT JEANS",
    alt: "SKINNY FIT JEANS",
    price: 240,
    oldPrice: 260,
    percent: 20,
  },
  {
    id: 2,
    sourceImage: __ar3,
    name: "CHECKERED SHIRT",
    alt: "CHECKERED SHIRT",
    price: 180,
  },
  {
    id: 3,
    sourceImage: __ar4,
    name: "SLEEVE STRIPED T-SHIRT",
    alt: "SLEEVE STRIPED T-SHIRT",
    price: 130,
    oldPrice: 160,
    percent: 30,
  },
];
