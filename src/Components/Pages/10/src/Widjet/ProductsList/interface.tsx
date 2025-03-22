export interface Card {
  id: number;
  sourceImage: string;
  name: string;
  alt: string;
  price: number;
  oldPrice?: number;
  percent?: number;
}
