import { createContext, useState, useEffect } from "react";

export const FavoriteContext = createContext({
  addToFavoriteItems: [],
  addItemToFavorites: (movieData) => {},
  removeItemToFavorites: (movieData) => {},
});

export function FavoriteContextProvider({ children }) {
  const [addToFavoriteItems, setAddToFavoriteItems] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(addToFavoriteItems));
  }, [addToFavoriteItems]);

  function addItemToFavorites(movieData) {
    setAddToFavoriteItems((prevVal) => {
      let movieItemIndex = prevVal.findIndex((val) => val.id === movieData.id);
      if (movieItemIndex === -1) {
        return [...prevVal, movieData];
      }
      return [...prevVal];
    });
  }

  function removeItemToFavorites(movieData) {
    let updatedFavoriteItems;
    setAddToFavoriteItems((prevVal) => {
      updatedFavoriteItems = prevVal.filter((val) => val.id !== movieData.id);
      return updatedFavoriteItems;
    });
  }

  const contextValue = {
    addToFavoriteItems,
    addItemToFavorites,
    removeItemToFavorites,
  };
  return <FavoriteContext value={contextValue}>{children}</FavoriteContext>;
}
