import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css'

import Home from './component/Home/Home'
import MovieInfo from './component/MovieInfo/MovieInfo'
import Navbar from './component/Navbar/Navbar'
import Trending from './component/Trending/Trending'
import WatchList from './component/WatchList/WatchList'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/watch-list" component={WatchList} />
          <Route path="/movie/:movieId" component={MovieInfo} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
