import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMoviesByQuery } from "../../services/api";
import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";
import { Loader } from "../../components/Loader/Loader";

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    async function fetchMovies() {
      setIsLoading(true);
      try {
        const data = await fetchMoviesByQuery(query);
        setMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, [query]);

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <SearchForm onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {error && <p>{error.message}</p>}
      {!isLoading && movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
