import { NavLink } from 'react-router-dom';
import style from './HeroLinks.module.css';
import img1 from '../../assets/images/Dessert.svg'
import img2 from '../../assets/images/Drink.svg'
import img3 from '../../assets/images/Combo.svg'
import img4 from '../../assets/images/Snacks.svg'
import img5 from '../../assets/images/Sauce.svg'
import img6 from '../../assets/images/Group 98.svg'
import img7 from '../../assets/images/Sushi.svg'


const HeroLinks = () => {
    return (
        <div>
            <div className={style.row}>
                <NavLink to="/promotions">
                    <div className={style.card}>
                        <div className={style.icon}>
                            <i className="bi bi-fire"></i>
                        </div>
                        <div className={style.content}>
                            <p>Акции</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink to="/pizza">
                    <div className={style.card}>
                        <div className={style.icon}>
                            <img src={img6} alt="img" />
                        </div>
                        <div className={style.content}>
                            <p>Пицца</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink to="/sushi">
                    <div className={style.card}>
                        <div className={style.icon}>
                            <img src={img7} alt="img" />
                        </div>
                        <div className={style.content}>
                            <p>Суши</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink to="/drinks">
                    <div className={style.card}>
                        <div className={style.icon}>
                            <img src={img2} alt="" />
                        </div>
                        <div className={style.content}>
                            <p>Напитки</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink to="/snacks">
                    <div className={style.card}>
                        <div className={style.icon}>
                            <img src={img4} alt="img" />
                        </div>
                        <div className={style.content}>
                            <p>Закуски</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink to="/combo">
                    <div className={style.card}>
                        <div className={style.icon}>
                            <img src={img3} alt="" />
                        </div>
                        <div className={style.content}>
                            <p>Комбо</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink to="/desserts">
                    <div className={style.card}>
                        <div className={style.icon}>
                            <img src={img1} alt="img" />
                        </div>
                        <div className={style.content}>
                            <p>Десерты</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink to="/sauces">
                    <div className={style.card}>
                        <div className={style.icon}>
                            <img src={img5} alt="img" />
                        </div>
                        <div className={style.content}>
                            <p>Соусы</p>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default HeroLinks;