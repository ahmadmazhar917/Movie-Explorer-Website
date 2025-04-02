export async function loadMoviesData() {
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
  for (let el of movieNamesList) {
    let page = 1;
    while (page < 3) {
      const response = await fetch(`${baseUrl}&page=${page}&s=${el}`);
      const dt = await response.json();
      if (dt.Response === "False") break;

      for (let movie of dt.Search) {
        movie.id = counter;
        movie.favorites = false;
        counter++;
      }

      moviesData.push(...dt.Search);
      page++;
    }
  }
  return moviesData;
}

export async function searchMovies(query) {
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
    return data.Search;
  }
  return [];
}

export async function fetchMovieDetails(id) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=84c484f2&i=${id}`
  );
  const data = await response.json();

  if (data) {
    return data;
  }
  return null;
}
