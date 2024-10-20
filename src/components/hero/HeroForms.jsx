import style from './HeroForms.module.css'

const HeroForm = () => {
    return (
        <div className={style['form']}>
            <div className={style['row']}>
                <p>Проверить адрес доставки</p>
                <div className={style['input']}>
                    <i className="bi bi-geo-alt"></i>
                    <input placeholder='Адрес' type='text' />
                </div>
                <button className={style['btn']}>Проверить</button>
            </div>
        </div>
    )
}

export default HeroForm