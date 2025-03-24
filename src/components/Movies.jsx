import { useEffect, useState } from "react";
import ErrorComponent from "./ErrorComponent";

import { ImageList } from "@mui/material";

const Movies = () => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");

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

  return (
    <>
      {isFetching && (
        <p className="text-center mt-10">Fetching movies data...</p>
      )}
      <ImageList>
        {data.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        ))}
      </ImageList>
      {error && <ErrorComponent title="An Error Occured" message={error} />}
    </>
  );
};

export default Movies;
