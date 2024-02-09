import React, { useEffect, useState } from 'react'

import { getProducts } from '../services/ApiServices';
import Product from './Product';

export default function Products() {

    const [products, setProducts] = useState([]);



    useEffect(()=>{

        async function fetchProducts() {
            try {
                const response = await  getProducts('products')
             
              setProducts(response.data);
            } catch (error) {
              console.error('Error fetching products:', error);
            }
          }
      
          fetchProducts();

    },[]);
  return (
    <div>
      {products && products.map(product=><Product   key={product.id} product={product}  />)}
    </div>
  )
}
