import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchAsyncMovieDetail } from '../../redux/movieSlice';
import { getMovieDetails } from './../../redux/movieSlice';

import '../../App.css';
import './MovieInfo.css';

const MovieInfo = ({ match }) => {
  const { movieId } = match.params
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncMovieDetail(movieId))
  }, [dispatch, movieId])

  const movie = useSelector(getMovieDetails)
  const backImg = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`

  const styles = {
    width: '100%',
    backgroundImage: backImg ? `url(${backImg})` : null,
  }

  return (
    <section className="movie-details" style={styles} key={movie.id}>
      <div className="info-box">
        <div className="detail">
          <h1 className="movie-title">{movie.title}</h1>

          <div className="original-release row ">
            <h3>Original Release : </h3>
            <p>{movie.release_date}</p>
          </div>

          <div className="running-time row">
            <h3>Running Time : </h3>
            <p>
              {movie.runtime}
              {movie.episodeRuntime} min
            </p>
          </div>

          <div className=" vote ">
            <i class="fa-solid fa-star"></i>
            <div>
              <h2>{movie.vote_average}</h2>
              <span> / 10</span>
            </div>
          </div>

          <p className="overview">{movie.overview}</p>
          <div className="links">
            <Link className="btn home" to="/">
              Home
            </Link>
            <button className="btn trailer">Watch Trailer</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MovieInfo
