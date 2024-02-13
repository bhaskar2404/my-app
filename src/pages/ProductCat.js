import React, { useEffect, useState } from 'react'
import { getCategories, getProducts } from '../services/ApiServices';
import { Products } from './Products';
import { CategoryList } from './CategoryList';
import './Product.css';

const ProductCat = () => {

    const [categories,setCategories]=useState([]);
    const [products,setProducts]=useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [cart,setCart]=useState([]);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
      };

     const handleAddToCart=(product)=>{
        console.log("Hello");
          setCart([...cart,product]);
     } 

     const cartTotal = cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);

     const cartItemCount = cart.reduce((count, item) => {
      if (!count[item.id]) {
        count[item.id] = {
          count: 0,
          title: item.title
        };
      }
      count[item.id].count++;
      return count;
    }, {});


    useEffect(()=>{

        async function fetchCategories() {
            try {
                const response = await  getCategories('products/categories');
             
              setCategories(response.data);
            } catch (error) {
              console.error('Error fetching products:', error);
            }
          }
      
          fetchCategories();

    },[]);

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
    
       <div className="app-container">
         <div className="sidebar">
         <CategoryList categories={categories} onSelectCategory={handleCategorySelect} />  
        </div>
        <div className="content">
      <Products  products={selectedCategory ? products.filter(product => product.category === selectedCategory) : products}   onAddToCart={handleAddToCart}/>
      </div>
      <div>
        <div>
        <h2>Cart</h2>
        <p>Total items in cart: {cart?.length}</p>
        <p>Total sum of items: ${cartTotal}</p>
        </div>
        <div className="cart">
          <h2>Cart</h2>
            {Object.entries(cartItemCount).map(([productId, { count, title }]) => (
            <p key={productId}>{title}: {count}</p>
  ))}
</div>
      </div>
    </div>
    
  )
}

export default ProductCat
