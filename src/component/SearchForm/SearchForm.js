import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies } from '../../redux/movieSlice'

import './SearchForm.css'
import '../../App.css'

const SearchForm = () => {
  const dispatch = useDispatch()

  const [search, setSeacrchValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchAsyncMovies(search))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search-input"
        placeholder="Search"
        type="text"
        onChange={(e) => setSeacrchValue(e.target.value)}
      />
      <button className="search-icon">
        <i className="fas fa-search"></i>
      </button>
    </form>
  )
}

export default SearchForm
