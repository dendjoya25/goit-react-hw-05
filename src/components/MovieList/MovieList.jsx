import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import styles from "./MovieList.module.css";

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={styles["movie-list"]}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles["movie-item"]}>
          <Link
            to={`/movies/${movie.id}`}
            state={location}
            className={styles["movie-link"]}
          >
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : "https://via.placeholder.com/200x300?text=No+Image"
              }
              alt={movie.title}
              className={styles["movie-image"]}
            />
            <h3 className={styles["movie-title"]}>{movie.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;
