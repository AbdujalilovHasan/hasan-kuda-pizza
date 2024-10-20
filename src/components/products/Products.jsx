import { products } from '../../constants/products';
import style from './Products.module.css'; 
import { useCart } from './UseCart';

function Products() {
    const { addToCart, removeFromCart, cart } = useCart();
    const categories = [...new Set(products.map(product => product.category))];

    return (
        <div className={style["products-container"]}>
            {categories.map((category) => (
                <div key={category} className={style["category-section"]}>
                    <h2 className={style["category-title"]}>{getCategoryTitle(category)}</h2>
                    <div className={style["row"]}>
                        {products
                            .filter(product => product.category === category)
                            .map((product) => {
                                const inCart = cart.find(item => item.id === product.id);

                                return (
                                    <div 
                                        key={product.id} 
                                        className={`${style["product-card"]} ${inCart ? style["in-cart"] : ''}`}
                                    >
                                        <img src={product.image} alt={`Изображение продукта: ${product.name}`} />
                                        <h3>{product.name}</h3>
                                        <p>{product.description}</p>
                                        <div className={style["bottom-row"]}>
                                            {inCart ? (
                                                <div className={style['count']}>
                                                    <button 
                                                        className={style['count-btn']} 
                                                        onClick={() => removeFromCart(product)}
                                                    >
                                                        -
                                                    </button>
                                                    <span>{inCart.count}</span>
                                                    <button 
                                                        className={style['count-btn']} 
                                                        onClick={() => addToCart(product)}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className={style["btn"]}>
                                                    <button 
                                                        className={style['select-btn']} 
                                                        onClick={() => addToCart(product)}
                                                    >
                                                        Выбрать
                                                    </button>
                                                </div>
                                            )}
                                            <div className={style["price"]}>
                                                <p style={{ color: '#FF7010', fontWeight: '600' }}>
                                                    {product.price} ₽
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            ))}
        </div>
    );
}


function getCategoryTitle(category) {
    switch (category) {
        case 'pizza':
            return 'Пицца';
        case 'combo':
            return 'Комби';
        case 'sauce':
            return 'Coyc';
        case 'sushi':
            return 'Суши';
        case 'drinks':
            return 'Напитки';
        default:
            return category;
    }
}

export default Products;    