import React, { use } from "react";
import { ImageListItem, ImageListItemBar, IconButton } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteContext } from "../store/favorites-context";

const MovieItem = ({ movieItemData, showFavoritesIcon }) => {
  const navigate = useNavigate();
  const { addItemToFavorites, removeItemToFavorites } = use(FavoriteContext);

  const [addToFavorite, setAddToFavorite] = useState(movieItemData.favorites);

  function handleClickToFavorite() {
    setAddToFavorite(!addToFavorite);
    movieItemData.favorites = !movieItemData.favorites;
  }

  function handleClickForMovieDetails(clickedMovieItem) {
    const movieID = clickedMovieItem.imdbID;
    if (movieID.trim() !== "") {
      navigate(`/moviedetails?id=${movieID}`);
    }
  }

  return (
    <ImageListItem onClick={() => handleClickForMovieDetails(movieItemData)}>
      <img
        src={movieItemData.Poster}
        alt={movieItemData.Title}
        loading="lazy"
        style={{ width: "100%", height: "100%" }}
      />
      <ImageListItemBar
        title={movieItemData.Title}
        subtitle={movieItemData.Year}
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.75)",
          "& .MuiImageListItemBar-title": {
            fontSize: "1.5rem",
            marginBottom: "0.75rem",
          },
          "& .MuiImageListItemBar-subtitle": {
            fontSize: "1rem",
          },
        }}
        actionPosition="right"
        actionIcon={
          showFavoritesIcon && (
            <IconButton
              onClick={handleClickToFavorite}
              sx={{ color: "rgb(255, 0, 0)" }}
            >
              {addToFavorite === false ? (
                <FavoriteBorderOutlinedIcon
                  onClick={() => addItemToFavorites(movieItemData)}
                />
              ) : (
                <FavoriteIcon
                  onClick={() => removeItemToFavorites(movieItemData)}
                />
              )}
            </IconButton>
          )
        }
      ></ImageListItemBar>
    </ImageListItem>
  );
};

export default MovieItem;
