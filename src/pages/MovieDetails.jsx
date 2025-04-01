import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorComponent from "../components/ErrorComponent";

const MovieDetails = () => {
  const { id } = useParams();
  const [searchedMovieDetails, setSearchedMovieDetails] = useState(null);
  const [error, setError] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const fetchMovies = async (id) => {
    setIsFetching(true);
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=84c484f2&i=${id}`
      );
      const data = await response.json();

      if (data) {
        setSearchedMovieDetails(data);
      } else {
        setSearchedMovieDetails(null);
      }
    } catch (error) {
      setError(error.message || "Unable to fetch movie details.");
    }
    setIsFetching(false);
  };

  useEffect(() => {
    if (id) {
      fetchMovies(id);
    }
  }, [id]);

  if (error) {
    return <ErrorComponent title="An Error Occurred" message={error} />;
  }

  if (isFetching) {
    return (
      <p className="text-center mt-5 h-screen">Fetching movie details...</p>
    );
  }

  return (
    searchedMovieDetails && (
      <div className="flex flex-col justify-center items-center mt-5">
        <h2>{searchedMovieDetails.Title}</h2>
        <img
          src={searchedMovieDetails.Poster}
          alt={searchedMovieDetails.Title}
          width={200}
        />
        <p>
          <strong>Year: </strong> {searchedMovieDetails.Year}
        </p>
        <p>
          <strong>Genre: </strong> {searchedMovieDetails.Genre}
        </p>
        <p>
          <strong>Director: </strong> {searchedMovieDetails.Director}
        </p>
        <p className="text-center">
          <strong>Plot: </strong> {searchedMovieDetails.Plot}
        </p>
      </div>
    )
  );
};

export default MovieDetails;
