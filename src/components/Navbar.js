import React from 'react'
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg fixed-top " style={{ color: 'white' ,background:'black'}}>

<div className="container-fluid">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <Link className="navbar-brand" href="#" style={{ color: 'white',fontStyle:'Bold' }}>SummerFruits</Link>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
    <li className="nav-item dropdown" >
          <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item " to="/add" >ADD Fruits</Link></li>
            <li><Link className="dropdown-item" to="/display">Show all Fruits</Link></li>
            <li><Link className="dropdown-item" href="#">Show latest fruits</Link></li>
          </ul>
        </li>
     
   
    </ul>
    <form className="d-flex" role="search">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success btn-sm mx-2" type="submit" style={{color:'white'}}>Search</button>
      <button type="button" className="btn btn-success position-relative btn-sm" style={{ borderRadius: '30px' }}>
        Cart
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          0
        </span>
      </button>
    </form>
  </div>
</div>
</nav>
    </div>
  )
}

export default navbar