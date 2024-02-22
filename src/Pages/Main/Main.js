import React ,{useEffect} from 'react'
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPopularDrinks,getPopularIngredients, getRandomDrink,getRandomItem,getAlfavitDrink } from '../../Toolkit/CocktailSlice';
import PopularDrinkInfo from '../../components/Popular-DrinkInfo/PopularDrinkInfo';
import AlfavitInfo from '../../components/AlfavitInfo'
import Home from '../Home';

const Main = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopularDrinks())
        dispatch(getPopularIngredients())
        dispatch(getRandomDrink())
        dispatch(getRandomItem())
    },[])
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/drink/:idDrink/:title" element={<PopularDrinkInfo/>}/>
                <Route path="/alfavit/:drinks" element={<AlfavitInfo/>}/>
            </Routes>

        </div>
    )
}

export default Main
