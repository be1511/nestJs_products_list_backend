import { Product } from '../product.entity';

export const productsStub = (): Product[] => {
  return [
    {
      product_id: 1,
      name: 'Red Pen',
      price: 2.23,
      description: 'lorem ipsum dolor sit amet',
    },
    {
      product_id: 2,
      name: 'Painting Brush',
      price: 10.9,
      description: 'some high quality painting brush',
    },
  ];
};

export const productStub = (): Product => {
  return {
    product_id: 1,
    name: 'Red Pen',
    price: 2.23,
    description: 'lorem ipsum dolor sit amet',
  };
};
