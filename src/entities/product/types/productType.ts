export interface Raiting {
  rate: number;
  count: number;
}
export interface CardApi {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: Raiting;
}

export interface Card extends CardApi {
  quantity: number;
}

export interface ProductsState {
  cards: Card[];
  setProducts: (cards: Card[]) => void;
}
