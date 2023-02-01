import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className="jumbotron centered">
  <div className="container">
    <i className="fas fa-key fa-6x"></i>
    <h1 className="display-3">Secrets</h1>
    <p className="lead">Don't keep your secrets, share them anonymously!</p>
    <br/>
    
    {/* <a class="btn btn-light btn-lg" href="/users/sign-out" role="button">Sign Out</a>
    <a class="btn btn-dark btn-lg" href="/users/secrets" role="button">Share your Secret</a> */}

    <NavLink className="btn btn-light btn-lg" to="/sign-up" role="button">Register</NavLink>
    <NavLink className="btn btn-dark btn-lg" to="/sign-in" role="button">Login</NavLink>
  </div>
</div>
  )
}

export default Home