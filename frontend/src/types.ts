export interface Product {
  id: string;
  name: string;
  brand?: string;
  price: number;
  oldPrice?: number;
  description: string;
  image: string;
  images?: string[];
  category: string;
  dosage?: string;
  rating: number;
  reviews: number;
  reviewsData?: Review[];
  prescription: boolean;
  options?: {
    label: string;
    choices: {
      text: string;
      price?: number; // Override price
      modifier?: number; // Add to base price
    }[];
  }[];
}

export interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  content: string;
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