import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Product';
import Cart from './Cart';

const productsData = [
  { id: 1, name: 'Product 1', description: 'Description for Product 1', price: '$19.99', stars: 4 },
  { id: 2, name: 'Product 2', description: 'Description for Product 2', price: '$29.99', stars: 5 },
  { id: 3, name: 'Product 3', description: 'Description for Product 3', price: '$9.99', stars: 4 },
  { id: 4, name: 'Product 4', description: 'Description for Product 4', price: '$69.99', stars: 2 },
  { id: 5, name: 'Product 5', description: 'Description for Product 5', price: '$27.99', stars: 4 },
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);
  };

  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-light" style={{ backgroundColor: '#F8F9FA' }}>
          <div className="container d-flex justify-content-between">
            <div className="navbar-nav">
              <a className="nav-link" href="#home">
                Home
              </a>
              <a className="nav-link" href="#about">
                About
              </a>
              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#shop"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#all-products">
                    All Products
                  </a>
                  <a className="dropdown-item" href="#popular-items">
                    Popular Items
                  </a>
                  <a className="dropdown-item" href="#new-arrivals">
                    New Arrivals
                  </a>
                </div>
              </div>
            </div>
            <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
          </div>
        </nav>
      </header>
      <div className="homepage-template">
        <div className="container" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
          <h1 className="text-white">Shop in style.</h1>
        </div>
      </div>
      <div className="container" style={{ marginTop: '20px' }}>
        <div className="row">
          {productsData.map((product) => (
            <div key={product.id} className="col-md-4">
              <Product
                product={product}
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
