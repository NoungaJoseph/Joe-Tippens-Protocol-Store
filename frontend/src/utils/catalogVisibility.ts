import { Product } from '../types';

const normalize = (value: string) => value.trim().toLowerCase();

export const hasProductsForCategory = (products: Product[], category: string): boolean => {
  const normalizedCategory = normalize(category);
  return products.some((product) => normalize(product.category) === normalizedCategory);
};

export const hasProductsForSearch = (products: Product[], searchTerm: string): boolean => {
  const normalizedSearch = normalize(searchTerm);
  if (!normalizedSearch) return products.length > 0;
  return products.some((product) => normalize(product.name).includes(normalizedSearch));
};

export const hasProductsForCatalogPath = (products: Product[], href: string): boolean => {
  const queryString = href.includes('?') ? href.split('?')[1] : '';
  const params = new URLSearchParams(queryString);
  const category = params.get('category');
  const search = params.get('search');

  if (category) return hasProductsForCategory(products, category);
  if (search) return hasProductsForSearch(products, search);
  return products.length > 0;
};
