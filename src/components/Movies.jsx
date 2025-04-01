import ErrorComponent from "./ErrorComponent";
import MoviesWrapper from "./MoviesWrapper";
import { loadMoviesData } from "../http";
import { useFetch } from "../hooks/useFetch";
const Movies = () => {
  const { data, isFetching, error } = useFetch(loadMoviesData, []);

  return (
    <>
      {isFetching && (
        <p className="text-center mt-10 h-screen">Fetching movies data...</p>
      )}
      {!isFetching && <MoviesWrapper data={data} />}
      {error && <ErrorComponent title="An Error Occured" message={error} />}
    </>
  );
};

export default Movies;
