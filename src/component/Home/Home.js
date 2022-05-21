import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAsyncMovies, getAllMovies } from '../../redux/movieSlice';
import MovieCard from './../MovieCard/MovieCard';
import SearchForm from './../SearchForm/SearchForm';

import './Home.css';
import '../../App.css';

function Home() {
  const dispatch = useDispatch();
  const movies = useSelector(getAllMovies);

  const movText = 'man';

  useEffect(() => {
    dispatch(fetchAsyncMovies(movText));
  }, [dispatch])

  const items = movies.map((movie) => (
    <MovieCard movie={movie} key={movie.id} />
  ))

  return (
    <main>
      <div className="search-form">
        <SearchForm />
      </div>
      <div className="movies-container">{items}</div>
    </main>
  )
}

export default Home
