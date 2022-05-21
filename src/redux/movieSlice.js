import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async (search) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=44bc6cc45be8f1a815f9ad1d81a1393d&language=en-US&page=1&include_adult=false&query=${search}`
    )
    const data = await response.json()
    return data
  }
)

export const fetchAsyncMovieDetail = createAsyncThunk(
  'movies/fetchAsyncMovieDetail',
  async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=44bc6cc45be8f1a815f9ad1d81a1393d&language=en-US`
    )
    const data = await response.json()
    return data
  }
)

export const fetchTrendingMovies = createAsyncThunk(
  'movies/fetchTrendingMovies',
  async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=44bc6cc45be8f1a815f9ad1d81a1393d'
    )
    const data = await response.json();
    return data;
  }
)

const initialState = {
  movies: [],
  watchList: [],
  trending: [],
  selectedMovie: {}
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addToWatchList: (state, action) => {
        const movieExist = state.watchList.find(movie => movie.id === action.payload.id);
        if(!movieExist){
            state.watchList.push(action.payload);
        }
    },
    removeFromWatchList: (state, action) => {
        const items = state.watchList.filter(movie => parseInt(movie.id) !== action.payload.id);
        state.watchList = items;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      state.movies = action.payload.results;
    },
    [fetchAsyncMovies.rejected]: (state, action) => {
      console.log('error');
    },
    [fetchAsyncMovieDetail.fulfilled]:(state,{payload})=>{
      return{...state, selectedMovie:payload} ;
    },
    [fetchTrendingMovies.fulfilled]: (state, action) => {
      state.trending.push(...action.payload.results);
    },
  },
})


export const getAllMovies = state => state.movies.movies;
export const getTrendingMovies = state => state.movies.trending;
export const getWatchListMovies = state => state.movies.watchList;
export const getMovieDetails = state => state.movies.selectedMovie;

export const { addToWatchList, removeFromWatchList } = movieSlice.actions;

export default movieSlice.reducer;

