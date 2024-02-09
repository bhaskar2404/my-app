import logo from './logo.svg';
import './App.css';
import { Link, Route, Router, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './pages/Categories';

function App() {
  return (
    <div className="App">
     
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            
            
            
          </ul>
        </nav>
      

        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path='/products' element={<Products/>}/>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/categories" element={<Categories />} />
        
       
        
      </Routes>
</div>
        
    </div>
  );
}

export default App;
