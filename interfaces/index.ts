export interface CardProps {
  image: string;
  name: string;
  price: number;
  rating: number;
}

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}

export interface PillProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}