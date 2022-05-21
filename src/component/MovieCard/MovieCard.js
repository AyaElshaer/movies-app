import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { addToWatchList } from '../../redux/movieSlice';

import './MovieCard.css';
import '../../App.css';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  function addWatchList(movie) {
    dispatch(addToWatchList(movie));
  }

  return (
    <div className="movie-card" key={movie.id}>
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="vote-average">
          <p>{movie.vote_average}</p>
        </div>
      </div>
      <h3>{movie.title}</h3>
      <div className="stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
      </div>
      <div className="movie-links">
        <Link className="movie-info" to={`/movie/${movie.id}`}>
          Details
        </Link>
        <Link
          className="watch-btn"
          onClick={() => addWatchList(movie)}
          to="/watch-list"
        >
          Watch List
        </Link>
      </div>
    </div>
  )
}

export default MovieCard
