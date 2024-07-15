import { createContext, useState } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

function FavouriteContextProvider({ children }) {
  const [favouriteMealsId, setFavouriteMealsId] = useState([]);

  function addFavourite(id) {
    setFavouriteMealsId((currentIds) => [...currentIds, id]);
  }

  function removeFavourite(id) {
    setFavouriteMealsId((currentIds) =>
      currentIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids:favouriteMealsId,
    addFavourite:addFavourite,
    removeFavourite:removeFavourite
  }

   console.log(favouriteMealsId);
  return <FavouriteContext.Provider value={value}>{children}</FavouriteContext.Provider>;
}

export default FavouriteContextProvider;
