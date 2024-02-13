import React,{ useEffect, useState }  from 'react'

import { getCategories } from '../services/ApiServices';


const Categories = () => {
    const [categories, setCategories] = useState([]);



    // useEffect(()=>{

    //     async function fetchCategories() {
    //         try {
    //             const response = await  getCategories('products/categories');
             
    //           setCategories(response.data);
    //         } catch (error) {
    //           console.error('Error fetching products:', error);
    //         }
    //       }
      
    //       fetchCategories();

    // },[]);
  return (
    <div>
      {categories && categories.map(cat=>
        <h1 key={cat}>{cat}</h1>
      )}
    </div>
  )
}

export default Categories
