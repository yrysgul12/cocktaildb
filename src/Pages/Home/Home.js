import React from "react";
import s from "./Home.module.css";
import List from "../../components/List/List";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PopularDrinks from "../../components/PopularDrinks2/popularDrinks";
import PopularIngredients from "./../../components/Popular-Ingredients/index";
import DrinkItem from "./../../components/DrinkItem/index";
import Alfavit from "../../components/Alfavit/Alfavit";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { popular, popularIngredients, latest, randomDrink, randomItem, alfavitDrink } =
    useSelector((state) => state.products);
  console.log("randomDrink", randomDrink);

  console.log("wrewr>>>", popularIngredients);

  const handleDrinkInfo = (id, title) => {
    navigate(`/drink/${id}/${title}`);
  };
  const randomDrinkId = (id, title) => {
    navigate(`/drink/${id}/${title}`);
  };
  const randomItemClick = (title) => {
    navigate(`/ingredient/${title}`);
  };

  return (
    <div className="container">
      <form className={s.home_search}>
        <input type="text" placeholder=" Search for a Cocktail..." />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>

      <div className={s.drink_item}>
        <h3>Popular Drinks</h3>
        <div className={s.drink_item_content}>
          <List
            items={popular}
            renderItem={(elem, i) => (
              <PopularDrinks
                key={i}
                onClick={() => handleDrinkInfo(elem.idDrink, elem.strDrink)}
                {...elem}
              />
            )}
          />
        </div>

        <div className={s.ingredient_item}>
          <h3>Popular Ingredients</h3>
          <div className={s.ingredient_content}>
            <List
              items={popularIngredients}
              renderItem={(elem, i) => {
                if (i < 4) {
                  return <PopularIngredients key={i} {...elem} />;
                }
              }}
            />
          </div>
        </div>

        {/* <div className={s.drink_item}>
          <h3>Latest Drinks</h3>
          <div className={s.drink_item_content}>
            <List 
            items={latest && latest}
            renderItem={(elem,i)=>(
              <DrinkItem
              key={i}
              {...elem}
              onClick={()=>handleDrinkInfo()}
              />
            )}
            />
            
          </div>
        </div> */}

        <div className={s.random_drinks}>
          <div className={s.random_content}>
            <h3>Random Drinks</h3>
            <div className={s.random_images}>
              <List
                items={randomDrink}
                renderItem={(elem) => (
                  <DrinkItem
                    onClick={() =>
                      randomDrinkId(elem.idDrink, elem.strCategory)
                    }
                    {...elem}
                  />
                )}
              />
            </div>
          </div>
        </div>

        <div className={s.random_ingredients_title}>
          <h3>Random Ingredients</h3>
          <div className={s.random_ingredient}>
            <List
              items={randomItem}
              renderItem={(elem, i) => (
                <PopularIngredients
                  key={i}
                  onClick={() => randomItemClick(elem.strIngredient1)}
                  {...elem}
                />
              )}
            />
          </div>
        </div>
      </div>
      <div className={s.alfavit}>
        <h3>Browse By Name</h3>
        <div className={s.alfavit_content}>
          <Alfavit/>
        </div>
      </div>
    </div>
  );
};

export default Home;
