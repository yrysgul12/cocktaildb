import React from 'react'
import s from './DrinkItem.module.css'

const DrinkItem =(props)=> {
    const { strDrink, strDrinkThumb, onClick } = props;
    return (
      <div onClick={onClick} className={s.drink_content}>
        <div className={s.drink_img}>
          <img src={strDrinkThumb} alt="" />
        </div>
        <p>{strDrink}</p>
      </div>
    );
}

export default DrinkItem
