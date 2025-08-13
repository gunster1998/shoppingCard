export interface Raiting {
  rate: number;
  count: number;
}

export interface Card {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  image: string;
  rating: Raiting;
  quantity: number;
}

export interface Products {
  cards: Card[];
}
