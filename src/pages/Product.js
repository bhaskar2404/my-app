import React from 'react'

const Product = ({product,onAddToCart}) => {
    
  return (


    <div className="card">
      <img src={product.image} alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-price">{product.price}</p>
        <p className="card-category">{product.category}</p>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
    
    
  )
}

export default Product
