import { createRoot } from 'react-dom/client';
import App from './App'; 
import CartProvider from './contexts/CartContext';
import './index.css';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);
root.render(
    <CartProvider>
        <App />
    </CartProvider>
);