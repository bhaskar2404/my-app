import React from 'react'

const Product = ({product}) => {
    
  return (
    
        <div className="productContainer">
          
                <div key={product.id} className="productCard">
                    <img className="productImg" src={product.image} alt={product.title} />
                    <h3 className="productDetails">{product.title}</h3>
                    <h4 className="productDetails">$ {product.price}</h4>
                    <p className="productDetails">{product.description}</p>
                 </div>   
                

    </div>
  )
}

export default Product
