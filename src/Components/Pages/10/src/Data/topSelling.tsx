import { Card } from "../Widjet/ProductsList/interface";
// карточки поступлений
import __top1 from "../Shared/assets/__top1.jpg";
import __top2 from "../Shared/assets/__top2.jpg";
import __top3 from "../Shared/assets/__top3.jpg";
import __top4 from "../Shared/assets/__top4.jpg";

export const cardsTop: Card[] = [
  {
    id: 0,
    sourceImage: __top1,
    name: "VERTICAL STRIPED SHIRT",
    alt: "VERTICAL STRIPED SHIRT",
    price: 212,
    oldPrice: 232,
    percent: -20,
  },
  {
    id: 1,
    sourceImage: __top2,
    name: "COURAGE GRAPHIC T-SHIRT",
    alt: "COURAGE GRAPHIC T-SHIRT",
    price: 145,
  },
  {
    id: 2,
    sourceImage: __top3,
    name: "LOOSE FIT BERMUDA SHORTS",
    alt: "LOOSE FIT BERMUDA SHORTS",
    price: 80,
  },
  {
    id: 3,
    sourceImage: __top4,
    name: "FADED SKINNY JEANS",
    alt: "FADED SKINNY JEANS",
    price: 210,
  },
];
