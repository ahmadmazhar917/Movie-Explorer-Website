import React from "react";
import { ImageListItem, ImageListItemBar } from "@mui/material";

const MovieItem = ({ movieItemData }) => {
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
      ></ImageListItemBar>
    </ImageListItem>
  );
};

export default MovieItem;
