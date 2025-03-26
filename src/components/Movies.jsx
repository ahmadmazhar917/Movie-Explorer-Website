import { useEffect, useState } from "react";
import ErrorComponent from "./ErrorComponent";
import MovieItem from "./MovieItem";

import { ImageList, Pagination, Stack } from "@mui/material";

const itemsPerPage = 10;

const Movies = () => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadData() {
      const baseUrl = "http://www.omdbapi.com/?apikey=84c484f2";
      const movieNamesList = [
        "joker",
        "superman",
        "batman",
        "avengers",
        "spiderman",
      ];
      let moviesData = [];
      let counter = 0;

      setIsFetching(true);
      try {
        for (let el of movieNamesList) {
          let page = 1;
          while (page < 3) {
            const response = await fetch(`${baseUrl}&page=${page}&s=${el}`);
            const dt = await response.json();

            if (dt.Response === "False") break;

            for (let movie of dt.Search) {
              movie.id = counter;
              counter++;
            }

            moviesData.push(...dt.Search);
            page++;
          }
        }
        console.log(moviesData);
        setData(moviesData);
      } catch (error) {
        setError(error.message || "Failed to fetch movies data.");
      }
      setIsFetching(false);
    }

    loadData();
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      {isFetching && (
        <p className="text-center mt-10">Fetching movies data...</p>
      )}
      <ImageList gap={10} cols={2} rowHeight={600} sx={{ marginTop: "5rem" }}>
        {paginatedData.map((movie) => (
          <MovieItem key={movie.id} movieItemData={movie} />
        ))}
      </ImageList>
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
      {error && <ErrorComponent title="An Error Occured" message={error} />}
    </>
  );
};

export default Movies;
