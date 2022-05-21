import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <nav>
      <div className="logo">
        <div className="home-link">
          <Link to="/">Movie</Link>
        </div>
        <div className="icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
      </div>

      <div className={click ? 'nav-links-active' : 'nav-links'}>
        <Link to="/" onClick={handleClick}>
          Home
        </Link>
        <Link to="/watch-list" onClick={handleClick}>
          Watch List
        </Link>
        <Link to="/trending" onClick={handleClick}>
          Trending
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
