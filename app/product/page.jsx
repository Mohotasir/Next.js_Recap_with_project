import React from 'react'
import ProductCard from '../components/productCard';
import SearchBar from '../components/SearchBar';

export async function getProducts(search){
    const url = search
    ? `https://dummyjson.com/products/search?q=${search}`
    : `https://dummyjson.com/product`
   const res = await (fetch(url, {cache: 'no-store'}));
   const data = await res.json();
   return data;
}
export default async function page({searchParams}) {
   const { q = "" } = await searchParams
   const products = await getProducts(q);
   
  return (
    <div className="p-8">
      {/* <h1 className="text-2xl font-bold mb-4">Products</h1> */}
      <div className='flex justify-center my-6'>
          <SearchBar />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3'>
         {
            products.products.map((p)=>(
               <div key={p.id}>
                   <ProductCard product={p} />
               </div>
            ))
         }
      </div>
    </div>
  )
}
