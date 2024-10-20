import style from './HeroDiscount.module.css';
import img1 from '../../assets/images/Group 737.png';
import img2 from '../../assets/images/Group 738.png';
import img3 from '../../assets/images/Group 737.png';
import img4 from '../../assets/images/Group 738.png';

const HeroDiscount = () => {
    return (
        <div className={style["row"]}>
            <div className={style["card"]}>
                <div className={style["card-img"]}>
                    <img src={img1} alt="img" />
                </div>
                <div className={style["card-title"]}>
                    3 средние пиццы
                    от 999 рублей
                </div>
            </div>
            <div className={style["card"]}>
                <div className={style["card-img"]}>
                    <img src={img2} alt="img" />
                </div>
                <div className={style["card-title"]}>
                    Кэшбек 10% на самовывоз (доставка)
                </div>
            </div>
            <div className={style["card"]}>
                <div className={style["card-img"]}>
                    <img src={img3} alt="img" />
                </div>
                <div className={style["card-title"]}>
                    3 средние пиццы
                    от 999 рублей
                </div>
            </div>
            <div className={style["card"]}>
                <div className={style["card-img"]}>
                    <img src={img4} alt="img" />
                </div>
                <div className={style["card-title"]}>
                    Кэшбек 10% на самовывоз (доставка)
                </div>
            </div>
        </div>
    );
}

export default HeroDiscount;