import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MoviesWrapper from "../components/MoviesWrapper";
import ErrorComponent from "../components/ErrorComponent";

const SearchPage = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [error, setError] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("search");

  useEffect(() => {
    if (query) {
      fetchMovies(query);
    }
  }, [query]);

  const fetchMovies = async (query) => {
    setIsFetching(true);
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=84c484f2&s=${query}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        let counter = 0;
        for (let movie of data.Search) {
          movie.id = counter;
          counter++;
        }
        setSearchedMovies(data.Search);
      } else {
        setSearchedMovies([]);
      }
    } catch (error) {
      setError(error.message || "Unable to fetch searched movie.");
    }
    setIsFetching(false);
  };

  if (error) {
    return <ErrorComponent title="An Error Occurred" message={error} />;
  }

  if (isFetching) {
    return <p className="text-center mt-5 h-screen">Loading...</p>;
  }

  if (!isFetching && query && searchedMovies.length === 0) {
    return <p className="text-center mt-5 h-screen">No Movies Found.</p>;
  }

  return <MoviesWrapper data={searchedMovies} showFavoritesIcon={false} />;
};

export default SearchPage;
