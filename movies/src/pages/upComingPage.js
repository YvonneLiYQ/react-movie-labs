import React, {useState, useEffect } from "react";
import { getMovieUpComing } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage'

const UpComingPage = (props) => {
  const [movies, setMovies] = useState([]);
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  const addToFavorites = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favorite: true } : m
    );
    setMovies(updatedMovies);
  };

  useEffect(() => {
    getMovieUpComing().then(movies => {
      setMovies(movies);
    });
  }, []);

  return (
    <PageTemplate
      title='UpComing Movies'
      movies={movies}
      selectFavorite={addToFavorites}
    />
  );
};
export default UpComingPage;