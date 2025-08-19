export interface Cart {
  purchase: Purchase[];
  setPurchase: (purchase: Purchase[]) => void;
}

export interface Purchase {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}
