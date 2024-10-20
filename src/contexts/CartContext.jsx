import { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        const productStock = typeof product.stock === 'number' ? product.stock : 12;

        console.log("Product stock: ", productStock);
        console.log("Existing product count: ", existingProduct ? existingProduct.count : 'N/A');

        if (existingProduct) {
            if (existingProduct.count < productStock) {
                setCart(cart.map(item =>
                    item.id === product.id ? { ...existingProduct, count: existingProduct.count + 1 } : item
                ));
            } else {
                alert('Cannot add more of this product. Stock limit reached.');
            }
        } else {
            setCart([...cart, { ...product, count: 1 }]);
        }
    };

    const removeFromCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct && existingProduct.count > 1) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...existingProduct, count: existingProduct.count - 1 } : item
            ));
        } else {
            setCart(cart.filter(item => item.id !== product.id));
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <ProductContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </ProductContext.Provider>
    );
};

export default CartProvider;