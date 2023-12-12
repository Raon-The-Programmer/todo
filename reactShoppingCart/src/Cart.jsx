import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const cartQuantity = cartItems.length;

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <span className="cart-icon" role="img" aria-label="cart">
        🛒
      </span>
      <span className="cart-quantity">{cartQuantity}</span>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name}{' '}
            <button onClick={() => onRemoveFromCart(item)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
