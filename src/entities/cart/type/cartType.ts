export interface Cart {
  purchase: Purchase[];
}

export interface Purchase {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}
