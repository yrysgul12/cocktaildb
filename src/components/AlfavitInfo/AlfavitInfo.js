import React, { useEffect } from "react";
import s from "./AlfavitInfo.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import List from "../List";
import Alfavit from "../Alfavit/Alfavit";
import { getAlfavitDrink } from '../../Toolkit/CocktailSlice'

const AlfavitInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { alfavitDrinks } = useSelector((state) => state.products);
  const { drinks } = useParams();

  useEffect(() => {
    dispatch(getAlfavitDrink(drinks));
  }, [drinks]);
  
  const infoClick = (id, title) =>{
    navigate(`/drink/${id}/${title}`)
  }


  return (
    <div className="container">
      <div className={s.content}>
        {alfavitDrinks ? (
          <List
            items={alfavitDrinks}
            renderItem={(elem, i) => (
              <div key={i} onClick={()=>infoClick(elem.idDrink, elem.strDrink)} className={s.drink_content}>
                <div className={s.images}>
                  <img src={elem.strDrinkThumb} alt="" />
                </div>
                <p>{elem.strDrink}</p>
              </div>
            )}
          />
        ) : (
          <h2 className={s.text}>No drinks found</h2>
        )}
      </div>
      <div className={s.alfavit}>
        <h2>Browse Drinks</h2>
        <br />
        <Alfavit />
      </div>
    </div>
  );
};

export default AlfavitInfo;
