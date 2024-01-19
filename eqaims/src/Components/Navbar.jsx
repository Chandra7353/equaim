import React from 'react'
import { Link,  } from 'react-router-dom'

const Navbar = () => {
  

  
  
  return (
    <div >
        
        <nav class="navbar navbar-expand-lg bg-body-tertiary custom-nav-style " data-bs-theme="dark" >
  <div class="container-fluid custom-dropdown">
    <Link class="navbar-brand" to="#">TMS</Link>
    <button class="navbar-toggler custom-hamburger " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 custom-button">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/">Signup</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/log">Login</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/feedback">Addfeedback</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/edit">Editfeedback</Link>
        </li>
        
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar