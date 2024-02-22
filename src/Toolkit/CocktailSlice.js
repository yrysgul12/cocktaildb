import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../http/Settings";

const initialState = {
  popular: [],
  infoDrink: [],
  popularIngredients: [],
  // latest: [],
  randomDrink: [],
  randomIngredients: [],
  randomItem: [],
  alfavitDrinks: []
};

export const getPopularDrinks = createAsyncThunk(
  "popular/getPopularDrinks",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const drinkNumber = [
        11000, 11001, 11002, 11003, 11004, 11005, 11006, 11007,
      ];
      const results = await Promise.all(
        drinkNumber.map(async (number) => {
          const result = await instance.get(`lookup.php?i=${number}`);
          return result.data.drinks;
        })
      );
      const combinedDrinks = results.flat();
      dispatch(popularDrinks(combinedDrinks));
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const getPopularDrinkInfo = createAsyncThunk(
  "infoDrink/getPopularDrinkInfo",
  async (elem, { rejectWithValue, dispatch }) => {
    const result = await instance.get(`lookup.php?i=${elem}`);
    dispatch(popularDrinkInfo(result.data.drinks));
  }
);

export const getPopularIngredients = createAsyncThunk(
  "popularIngredients/getPopularIngredients",
  async (_, { rejectWithValue, dispatch }) => {
    const result = await instance.get(`list.php?i=list`);
    dispatch(popularingredientInfo(result.data.drinks));
  }
);
export const getRandomDrink = createAsyncThunk(
  "randomDrink/getRandomDrink",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const random = [1, 2, 3, 4, 5, 6, 7, 8];
      const responses = await Promise.all(
        random.map(() => instance.get(`random.php`))
      );
      const randomDrinksData = responses.map(
        (response) => response.data.drinks[0]
      );

      dispatch(getRandom(randomDrinksData));
    } catch (error) {
      rejectWithValue("Error fetching random Meal", error);
    }
  }
);
export const getRandomItem = createAsyncThunk(
  "randomItem/getRandomItem",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const random = [1, 2, 3, 4];
      const result = await Promise.all(
        random.map(() => instance.get("random.php"))
      );
      const randomIngredientsData = result.map(
        (result) => result.data.drinks[0]
      );
      dispatch(getRandomItems(randomIngredientsData));
    } catch (error) {
      rejectWithValue("Error fetching random ingredients", error);
    }
  }
);

export const getAlfavitDrink = createAsyncThunk(
  'alfavitDrinks/getAlfavitDrink',
  async (elem,{rejectWithValue,dispatch}) => {
    const result = await instance.get(`search.php?f=${elem}`)
    dispatch(getAlfavitDrinks(result.data.drinks))
  }
)

const cocktailSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    popularDrinks: (state, action) => {
      state.popular = action.payload;
    },
    popularDrinkInfo: (state, action) => {
      state.infoDrink = action.payload;
    },
    popularingredientInfo: (state, action) => {
      state.popularIngredients = action.payload;
    },
    getRandom: (state, action) => {
      state.randomDrink = action.payload;
    },
    getRandomItems: (state, action) => {
      state.randomItem = action.payload;
    },
    getAlfavitDrinks: (state,action) => {
      state.alfavitDrinks = action.payload;
    }
  },
});

export const {
  popularDrinks,
  popularDrinkInfo,
  popularingredientInfo,
  getRandom,
  getRandomItems,
  getAlfavitDrinks
} = cocktailSlice.actions;

export default cocktailSlice.reducer;
