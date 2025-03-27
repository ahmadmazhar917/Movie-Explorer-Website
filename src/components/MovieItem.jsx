import React, { use } from "react";
import { ImageListItem, ImageListItemBar, IconButton } from "@mui/material";
import { useState } from "react";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteContext } from "../store/favorites-context";

const MovieItem = ({ movieItemData }) => {
  const { addItemToFavorites, removeItemToFavorites } = use(FavoriteContext);

  const [addToFavorite, setAddToFavorite] = useState(movieItemData.favorites);

  function handleClickToFavorite() {
    setAddToFavorite(!addToFavorite);
    movieItemData.favorites = !movieItemData.favorites;
  }

  return (
    <ImageListItem>
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
        }
      ></ImageListItemBar>
    </ImageListItem>
  );
};

export default MovieItem;
