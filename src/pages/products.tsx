import { FC } from 'react';
import useSwr from 'swr';
import { fetcher } from '../utils/helper'
import { ProductsResponse } from './api/products';

type ProductsProps = {}

const Products: FC<ProductsProps> = (props) => {
  const { data, isLoading, error } = useSwr('/api/products', fetcher<ProductsResponse>);

  return (
    <div>
      {data?.items.map((item, index) => {
        return (
          <div key={index}>
            {item.name}
            {item.price}
            {item.description}
          </div>
        )
      })}
    </div>
  )
}

export default Products;
