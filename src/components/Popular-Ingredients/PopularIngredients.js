import React from "react";
import s from "./PopularIngredients.module.css";

const PopularIngredients = (props) => {
  const { strIngredient1, onClick } = props;

  return (
    <div onClick={onClick} className={s.content_item}>
      <img
        src={`https://www.thecocktaildb.com/images/ingredients/${strIngredient1}.png`}
        alt=""
      />
      <p>{strIngredient1}</p>
    </div>
  );
};

export default PopularIngredients;
