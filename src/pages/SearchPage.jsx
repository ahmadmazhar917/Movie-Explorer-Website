import { useLocation } from "react-router-dom";
import MoviesWrapper from "../components/MoviesWrapper";
import ErrorComponent from "../components/ErrorComponent";
import { useSearch } from "../hooks/useSearch";
import { searchMovies } from "../http";

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("search");

  const {
    data: searchedMovies,
    isFetching,
    error,
  } = useSearch(searchMovies, [], query);

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
