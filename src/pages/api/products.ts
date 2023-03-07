// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import productsData from './products.json';

// How it's coming from the json file
export type RawProduct = {
  name: string;
  price: number;
  description: string;
}

export type Product = { id: string } & RawProduct;

export type ProductsResponse = {
  items: Product[];
}

// Generating unique id to match requested format
const uniqueIdGenerator = () => {
  return Math.random().toString(36).slice(3);
}

// Transforming data to the requested format
const transformedData: Product[] = (productsData as { items: RawProduct[] }).items.map(item => {
  return {
    id: uniqueIdGenerator(),
    ...item,
  }
})


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductsResponse>
) {
  const { q } = req.query;
  
  const data = transformedData.filter((item) => {
    if (q == null || q?.length === 0) {
      return true;
    }

    const regex = new RegExp(q as string);
    return regex.test(item.name);
  });

  res.status(200).json({
    items: data,
  })
}
