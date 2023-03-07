// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import productsData from './products.json';

// How it's coming from the json file
type RawProduct = {
  name: string;
  price: number;
  description: string;
}

type Product = { id: string } & RawProduct;

type Response = {
  items: Product[];
}

// Generating unique id to match requested format
const uniqueIdGenerator = () => {
  return Math.random().toString(36).slice(3);
}

// Transforming data to the requested format
const transformedData: Response = {
  items: (productsData as { items: RawProduct[] }).items.map(item => {
    return {
      id: uniqueIdGenerator(),
      ...item,
    }
  })
};


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  res.status(200).json(transformedData)
}
