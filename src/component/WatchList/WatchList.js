import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getWatchListMovies, removeFromWatchList } from '../../redux/movieSlice'


import '../Home/Home.css'
import '../../App.css'

function WatchList() {
  const dispatch = useDispatch()

  const movies = useSelector(getWatchListMovies)

  function removeWatchList(movie) {
    dispatch(removeFromWatchList(movie))
  }
  return (
    <main>
      <div className="movies-container">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <div className='movie-poster'>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className='vote-average'>
                <p >{movie.vote_average}</p>
              </div>

            </div>
            <h3>{movie.title}</h3>
            <div className='stars' >
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
            <div className='movie-links'>
              <Link className='movie-info' to={`/movie/${movie.id}`}> Details </Link>
              <button className='watch-btn' onClick={() => removeWatchList(movie)}> Remove</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default WatchList
