import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWY4Y2EwM2RjZjc2YWUwMGRhNjJlMjVjM2ViOTFkMSIsIm5iZiI6MTc0NTI0NzMwMS4xNTUsInN1YiI6IjY4MDY1YzQ1NDIxYTMwOTc1Y2FhYzU1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-chw7jYAUdYf46OtDmz9ufCJzjL2FoIhQVPZnSwJeX8";

// Додаємо 'Bearer ' перед токеном
axios.defaults.headers.common["Authorization"] = `Bearer ${API_TOKEN}`;

// Запит на отримання популярних фільмів
export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}/trending/movie/day`);
    return response.data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

// Запит на пошук фільмів за ключовим словом
export const fetchMoviesByQuery = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/search/movie`, {
      params: { query, include_adult: false, language: "en-US", page: 1 },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching movies for query "${query}":`, error);
    throw error;
  }
};

// Запит на отримання деталей фільму
export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${API_URL}/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching movie details for movieId "${movieId}":`,
      error
    );
    throw error;
  }
};

// Запит на отримання акторського складу фільму
export const fetchMovieCredits = async (movieId) => {
  try {
    const response = await axios.get(`${API_URL}/movie/${movieId}/credits`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching credits for movieId "${movieId}":`, error);
    throw error;
  }
};

// Запит на отримання оглядів фільму
export const fetchMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(`${API_URL}/movie/${movieId}/reviews`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching reviews for movieId "${movieId}":`, error);
    throw error;
  }
};
