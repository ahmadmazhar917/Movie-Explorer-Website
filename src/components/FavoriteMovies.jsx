import React, { use } from "react";
import MoviesWrapper from "./MoviesWrapper";
import { FavoriteContext } from "../store/favorites-context";

const FavoriteMovies = () => {
  const { addToFavoriteItems } = use(FavoriteContext);
  return <MoviesWrapper data={addToFavoriteItems} />;
};

export default FavoriteMovies;
