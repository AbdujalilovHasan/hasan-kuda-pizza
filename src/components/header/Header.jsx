import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../../assets/images/logo.png';
import style from './Header.module.css';
import { ProductContext } from '../../contexts/CartContext';
import { categories } from '../../constants/categories';

const Header = () => {
    const location = useLocation();
    const { totalItems = 0, totalPrice = 0 } = useContext(ProductContext);
    const [time, setTime] = useState(30 * 60);
    const [isScrolled, setIsScrolled] = useState(false);

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        return `${hrs}:${mins}:${secs}`;
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        const timer = setInterval(() => {
            setTime(prevTime => (prevTime > 0 ? prevTime - 1 : clearInterval(timer)));
        }, 1000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(timer);
        };
    }, []);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className={style["bg-white"]}>
            <div className={style["cont"]}>
                <div>
                    <div className={style["nav-top"]}>
                        <div className={style['row']}>
                            <div className={style["nav-left"]}>
                                <div className={style['address']}>
                                    <div className={style["location-ion"]}>
                                        <i style={{ color: '#FF7010', fontSize: '20px' }} className="bi bi-geo-alt"></i>
                                    </div>
                                    <div className={style["dropdown"]}>
                                        <button onClick={toggleDropdown}>
                                            Moskva
                                        </button>
                                        <div className={`${style["dropdown-content"]} ${dropdownOpen ? style["show"] : ""}`}>
                                            <Link to="/">Moskva</Link>
                                            <Link to="/">Toshkent</Link>
                                            <Link to="/">New York</Link>
                                            <Link to="/">London</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className={style["testing-address"]}>
                                    <Link to="/check-address">Проверить адрес</Link>
                                </div>
                                <div className={style["time"]}>
                                    <p>Среднее время доставки*: <span>{formatTime(time)}</span></p>
                                </div>
                            </div>
                            <div className={style["nav-right"]}>
                                <div className={style["time-work"]}>
                                    <p>Время работы: с 11:00 до 23:00</p>
                                </div>
                                <div className={style["account"]}>
                                    <div className={style["user-icon"]}>
                                        <i style={{ color: '#FF7010', fontSize: '20px' }} className="bi bi-person"></i>
                                    </div>
                                    <div className={style["lacation-content"]}>
                                        <p>Войти в аккаунт</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className={style['hr']} />
            <div className={style["cont"]}>
                <div>
                    <div className={`${style["nav-bottom"]} ${isScrolled ? style["scrolled"] : ""}`}>
                        <div className={style["row"]}>
                            <div className={style["nav-left"]}>
                                <div className={style["logo"]}>
                                    <div className={style["logo-icon"]}>
                                        <img src={logo} alt="" />
                                    </div>
                                    <Link to='/'>
                                        <div className={style["logo-text"]}>
                                            Куда пицца
                                        </div>
                                    </Link>
                                </div>
                                <div className={`${style["links"]} ${isScrolled ? '' : style['hidden']}`}>
                                    <ul>
                                        {categories.map(category => (
                                            <li key={category.path}>
                                                <Link to={category.path} className={location.pathname === category.path ? style.active : ""}>
                                                    {category.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className={style["bottom-nav-right"]}>
                                <div className={style["cart-page"]}>
                                    <Link to="/cart">
                                        <div className={style["box"]}>
                                            <div className={style["icon"]}>
                                                <i className="bi bi-basket2-fill"></i>
                                            </div>
                                            <div className={style["content"]}>
                                                ({totalItems}) ₽{totalPrice}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="likes-page">
                                    <Link to="/favorites">
                                        <div className={style["box"]}>
                                            <div className={style["icon"]}>
                                                <i className="bi bi-heart"></i>
                                            </div>
                                            <div className={style["content"]}>
                                                Избранное
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;