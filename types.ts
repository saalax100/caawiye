
export enum Category {
  ALL = 'All Products',
  EGGS = 'Eggs',
  CHICKS = 'Chicks',
  BROILERS = 'Broilers',
  FEED = 'Organic Feed'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  unit: string;
  description: string;
  minOrder: string;
  badge?: string;
  image: string;
  inStock: boolean;
}

export interface FilterState {
  category: Category;
  priceRange: [number, number];
  availability: {
    inStock: boolean;
    preOrder: boolean;
  };
  searchQuery: string;
}
