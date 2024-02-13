import React from 'react'


import Product from './Product';

export const Products=({products,onAddToCart})=> {

  return (
    <div className="product-list">
        <h2>Product List</h2>
      <div className="products">
      {products && products.map(product=><Product   key={product.id} product={product} onAddToCart={onAddToCart} />)}
      </div>
    </div>
  )
}
