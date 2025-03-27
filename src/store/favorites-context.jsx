import { createContext, useState, useEffect } from "react";

export const FavoriteContext = createContext({
  addToFavoriteItems: [],
  addItemToFavorites: (movieData) => {},
  removeItemToFavorites: (movieData) => {},
});

export function FavoriteContextProvider({ children }) {
  const [addToFavoriteItems, setAddToFavoriteItems] = useState([]);

  // useEffect(() => {
  //   const data = localStorage.getItem("movies");
  //   if (data) {
  //     setAddToFavoriteItems(data);
  //   }
  // }, []);

  function addItemToFavorites(movieData) {
    let updatedItems;
    setAddToFavoriteItems((prevVal) => {
      updatedItems = [...prevVal, movieData];
      return updatedItems;
    });
  }

  function removeItemToFavorites(movieData) {
    let updatedFavoriteItems;
    setAddToFavoriteItems((prevVal) => {
      updatedFavoriteItems = prevVal.filter((val) => val.id !== movieData.id);
      return updatedFavoriteItems;
    });
    // localStorage.setItem("movies", updatedFavoriteItems);
  }

  const contextValue = {
    addToFavoriteItems,
    addItemToFavorites,
    removeItemToFavorites,
  };
  return <FavoriteContext value={contextValue}>{children}</FavoriteContext>;
}
