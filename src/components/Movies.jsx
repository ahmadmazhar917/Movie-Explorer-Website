import ErrorComponent from "./ErrorComponent";
import MoviesWrapper from "./MoviesWrapper";
import { loadMoviesData } from "../http";
import { useFetch } from "../hooks/useFetch";
const Movies = () => {
  const { data, isFetching, error } = useFetch(loadMoviesData, []);

  return (
    <div className="h-screen">
      {!isFetching && error && (
        <ErrorComponent title="An Error Occured" message={error} />
      )}
      {isFetching && (
        <p className="text-center mt-10 h-screen">Fetching movies data...</p>
      )}
      {!isFetching && !error && <MoviesWrapper data={data} />}
    </div>
  );
};

export default Movies;
