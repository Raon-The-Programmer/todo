import React, { useState } from 'react';

const Product = ({ product, onAddToCart, onRemoveFromCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleButtonClick = () => {
    if (isAdded) {
      onRemoveFromCart(product);
    } else {
      onAddToCart(product);
    }
    setIsAdded(!isAdded);
  };

  return (
    <div className="product">
      <div className="product-image" style={{ backgroundColor: '#DEE1E6', height: '300px', width: '395px' }}></div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <div>
        {Array.from({ length: product.stars }, (_, index) => (
          <span key={index} role="img" aria-label="star">
            ⭐
          </span>
        ))}
      </div>
      <button onClick={handleButtonClick}>{isAdded ? 'Remove from Cart' : 'Add to Cart'}</button>
    </div>
  );
};

export default Product;
