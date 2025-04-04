import { ImageList, Stack, Pagination } from "@mui/material";
import MovieItem from "./MovieItem";
import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";

const itemsPerPage = 10;
const MoviesWrapper = ({ data, showFavoritesIcon = true }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  const getRowHeight = () => {
    if (isXs) return 400;
    if (isSm) return 500;
    if (isMd) return 600;
    return 700;
  };
  return (
    <>
      <ImageList
        gap={10}
        cols={2}
        rowHeight={getRowHeight()}
        sx={{
          marginTop: "5rem",
          height: "100vh",
        }}
      >
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
