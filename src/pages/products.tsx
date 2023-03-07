import { FC, useEffect, useState } from 'react';
import useSwr from 'swr';
import { fetcher } from '../utils/helper'
import { ProductsResponse } from './api/products';
import styles from 'src/styles/ProductsContainer.module.css';

// Components
import { Product } from '../components/Product';

type ProductsProps = {}

const API = '/api/products';

const Products: FC<ProductsProps> = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const apiUrl = `${API}?q=${searchTerm}`;

  const { data, isLoading, error, mutate } = useSwr(apiUrl, fetcher<ProductsResponse>);

  useEffect(() => {
    if (searchTerm) {
      // Re-fetch data when the search term changes
      mutate();
    }
  }, [searchTerm, mutate]);
  
  return (
    <div>
      <input
        type='text'
        placeholder='search'
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />

      <div className={styles.productsContainer}>
        {data?.items.map((item, index) => {
          return (
            <Product
              key={index}
              productDetails={item}
            />
          )
        })}
      </div>

    </div>
  )
}

export default Products;
