import React, { Component } from 'react'
import './Navbar.css'

class Navbar extends Component
{
    render()
    {
        return(
            <div>
                <nav className = "navbar navbar-expand-lg navbar-light">
      
      <div className = "container">

      <a href = "/" className = "navbar-brand"><img src = {require('./images/waveslogo.png')} alt = "logo" className = "logo" /></a>
          {/* button when responsive */}
      <button className = "navbar-toggler" type = "button" data-toggle = "collapse" data-target = "#collapsenavbar">
          <span className =  "navbar-toggler-icon"></span>
      </button>

      {/* menus */}

      <div className = "collapse navbar-collapse text-center" id = "collapsenavbar">

          <ul className = "navbar-nav">
              <li className = "nav-item">
                  <a href = "/" className = "nav-link text-body"><p className = "nav-head">Home</p></a>

              </li>
              <li className = "nav-item">
                  <a href = "/freecouncelling/" className = "nav-link text-body"><p className = "nav-head">Free Counseling</p></a>
              </li>
              <li className = "nav-item">
                  <a href = "#ourservices" className = "nav-link text-body"><p className = "nav-head">Services</p></a>
              </li>
              <li className = "nav-item">
                  <a href = "#aboutus" className = "nav-link text-body"><p className = "nav-head">About Us</p></a>
              </li>
              <li className = "nav-item">
                  <a href = "/contact" className = "nav-link text-body"><p className = "nav-head">Contact</p></a>
                
              </li>
          </ul>

      </div>

      </div>

      </nav>
            </div>
        )
    }
}

export default Navbar