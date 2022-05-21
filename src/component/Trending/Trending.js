import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrendingMovies, getTrendingMovies } from '../../redux/movieSlice'

import MovieCard from './../MovieCard/MovieCard'

import '../Home/Home.css'
import '../../App.css'

function Trending() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTrendingMovies())
  }, [dispatch])

  const movies = useSelector(getTrendingMovies)
  
  const items = movies.map((movie) => (
    <MovieCard movie={movie} key={movie.id} />
  ))
  return (
    <main>
      <div className="movies-container">{items}</div>
    </main>
  )
}

export default Trending
