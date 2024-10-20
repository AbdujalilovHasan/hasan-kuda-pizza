import { useContext } from 'react';
import { ProductContext } from '../contexts/CartContext';

const CartPage = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(ProductContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div style={styles.container}>
      <div style={styles.cartWrapper}>
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cart.map(item => (
              <div key={item.id} style={styles.cartItem}>
                <h2>{item.name}</h2>
                <button onClick={() => addToCart(item)} style={styles.button}>+</button>
                <p>{item.price} ₽ x {item.count}</p>
                <button onClick={() => removeFromCart(item)} style={styles.button}>-</button>
                <button onClick={() => removeFromCart(item)} style={styles.removeButton}>Remove</button>
              </div>
            ))}
            <h2>Total: {totalPrice} ₽</h2>
            <button onClick={clearCart} style={styles.emptyCartButton}>Empty Cart</button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    overflowY: 'hidden', 
    background: '#f8f9fa',
    padding: '20px',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start', 
  },
  cartWrapper: {
    maxWidth: '1250px',
    width: '100%',
    padding: '20px',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginTop: '30px', 
  },
  cartItem: {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    margin: '5px 10px',
    padding: '5px 10px',
    background: '#FF7010',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  removeButton: {
    marginLeft: '10px',
    padding: '5px 10px',
    background: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  emptyCartButton: {
    padding: '10px 20px',
    background: '#FF7010',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default CartPage;