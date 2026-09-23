export interface ProductColor {
  name: string;
  hex: string;
  image: string;
  secondaryImage: string;
}

export interface Product {
  id: string;
  name: string;
  subName: string;
  tagline: string;
  gender?: 'women' | 'men' | 'unisex' | 'girls';
  category: 'heels' | 'loafers' | 'boots' | 'mules' | 'sneakers' | 'sandals' | 'flats' | 'oxfords' | 'monkstraps' | 'drivers' | 'mary-janes';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  isNew?: boolean;
  isBestseller?: boolean;
  isLimited?: boolean;
  colors: ProductColor[];
  sizes: number[];
  heelHeight?: string;
  materials: string[];
  description: string;
  details: string[];
  fitAdvice: string;
  craftsmanshipNotes: string;
}

export interface CartItem {
  product: Product;
  selectedColor: ProductColor;
  selectedSize: number;
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  verified: boolean;
  rating: number;
  date: string;
  title: string;
  text: string;
  shoeModel: string;
  fitRating: 'True to Size' | 'Runs Slightly Small' | 'Runs Slightly Large';
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  handle: string;
  likes: number;
  productId?: string;
  productName?: string;
  productPrice?: number;
}

export interface ConciergeInquiry {
  name: string;
  email: string;
  phone?: string;
  inquiryType: 'Sizing Consultation' | 'Bespoke Order' | 'Private Atelier Appointment' | 'Bridal Service' | 'General Inquiry';
  preferredContact: 'Instagram DM' | 'WhatsApp' | 'Email' | 'Phone';
  message: string;
  shoeInterest?: string;
}
