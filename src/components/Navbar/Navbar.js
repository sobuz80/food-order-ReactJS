import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
          {/* Vertical Navbar */}
  <div className="vertical-nav">
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/" className="nav-link"><i className="fas fa-home" /> </Link>
      </li>
      <li className="nav-item">
      <Link to="/contact" className="nav-link"><i className="fas fa-search" /></Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className="nav-link"><i className="fas fa-user" /></Link>
      
      </li>
      <li className="nav-item">
        <Link to="/contact" className="nav-link"> <i className="fas fa-cog" /></Link>
      
      </li>
      <li className="nav-item">
        <Link to="/contact" className="nav-link"><i className="fas fa-sign-out-alt" /></Link>
      
      </li>
    </ul>
  </div>
  
    </>
  )
}

export default Navbar