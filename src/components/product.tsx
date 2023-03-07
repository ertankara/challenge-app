import { FC } from 'react';
import { Product as ProductType } from '../pages/api/products';

export type ProductProps = {
  productDetails: ProductType;
}

export const Product: FC<ProductProps> = (props) => {
  const { productDetails } = props;

  return (
    <div>
      {productDetails.name}
      {productDetails.price}
      {productDetails.description}
    </div>
  )
}