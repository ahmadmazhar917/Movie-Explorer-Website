import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieDetails = () => {
  const { id } = useParams();
  const [searchedMovieDetails, setSearchedMovieDetails] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (id) {
      fetchMovies(id);
    }
  }, [id]);

  const fetchMovies = async (id) => {
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
      setError(error.message || "Unable to fetch searched movie.");
    }
  };

  return (
    searchedMovieDetails && (
      <div className="text-center">
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
        <p>
          <strong>Plot: </strong> {searchedMovieDetails.Plot}
        </p>
      </div>
    )
  );
};

export default MovieDetails;
