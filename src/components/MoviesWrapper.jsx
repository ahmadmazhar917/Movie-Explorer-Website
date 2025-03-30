import { ImageList, Stack, Pagination } from "@mui/material";
import MovieItem from "./MovieItem";
import { useState } from "react";

const itemsPerPage = 10;
const MoviesWrapper = ({ data, showFavoritesIcon = true }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <>
      <ImageList gap={10} cols={2} rowHeight={600} sx={{ marginTop: "5rem" }}>
        {paginatedData.map((movie) => (
          <MovieItem
            key={movie.id}
            movieItemData={movie}
            showFavoritesIcon={showFavoritesIcon}
          />
        ))}
      </ImageList>
      {data.length > 10 && (
        <Stack spacing={2} my={4} flexDirection="row" justifyContent="center">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            showFirstButton
            showLastButton
            color="secondary"
          />
        </Stack>
      )}
    </>
  );
};

export default MoviesWrapper;
