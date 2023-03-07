import { FC } from 'react';
import { Product as ProductType } from '../pages/api/products';
import styles from 'src/styles/Product.module.css';

export type ProductProps = {
  productDetails: ProductType;
}

export const Product: FC<ProductProps> = (props) => {
  const { productDetails } = props;

  return (
    <div className={styles.product}>
      <h1 className={styles.name}>{productDetails.name}</h1>
      <p className={styles.price}>{productDetails.price}</p>
      <p className={styles.description}>{productDetails.description}</p>
    </div>
  )
}