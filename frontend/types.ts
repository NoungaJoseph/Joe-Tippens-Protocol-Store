export interface Product {
  id: string;
  name: string;
  brand?: string;
  price: number;
  description: string;
  image: string;
  category: string;
  dosage?: string;
  rating: number;
  reviews: number;
  prescription: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  date: string;
  shippingDetails: {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    country: string;
  };
}