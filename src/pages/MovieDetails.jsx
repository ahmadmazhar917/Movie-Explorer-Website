import { useParams } from "react-router-dom";
import ErrorComponent from "../components/ErrorComponent";
import { useSearch } from "../hooks/useSearch";
import { fetchMovieDetails } from "../http";

const MovieDetails = () => {
  const { id } = useParams();
  const {
    data: searchedMovieDetails,
    isFetching,
    error,
  } = useSearch(fetchMovieDetails, null, id);

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
