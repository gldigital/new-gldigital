import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="#">Navbar</a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Link className="nav-item nav-link active" to="#featured">Featured Projects</Link>
          <Link className="nav-item nav-link" to="#additional">Additional Projects</Link>
          <Link className="nav-item nav-link" to="#about">About</Link>
          <Link className="nav-item nav-link" to="#connect">Let's Connect</Link>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
