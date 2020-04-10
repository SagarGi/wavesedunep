import React, { Component } from 'react';
import './App.css'

class App extends Component
{
  render()
  {
    return(
      <div className = "main">

        <div className = "wrapper">
           <nav className = "navbar navbar-expand-lg  navbar-light  static-top">

            <div className = "container">

              <a href = "" className = "navbar-brand"><img src = {require('./images/logowaves.png')} alt = "logo" className = "logo" /></a>
                {/* button when responsive */}
              <button className = "navbar-toggler" type = "button" data-toggle = "collapse" data-target = "#collapsenavbar">
                <span className =  "navbar-toggler-icon"></span>
              </button>

              {/* menus */}

              <div className = "collapse navbar-collapse text-center" id = "collapsenavbar">

                <ul className = "navbar-nav ml-auto">
                    <li className = "nav-item">
                        <a href = "" className = "nav-link text-body"><p>Home</p></a>
                    </li>
                    <li className = "nav-item">
                        <a href = "" className = "nav-link text-body"><p>Free Counseling</p></a>
                    </li>
                    <li className = "nav-item">
                        <a href = "" className = "nav-link text-body"><p>Services</p></a>
                    </li>
                    <li className = "nav-item">
                        <a href = "" className = "nav-link text-body"><p>About Us</p></a>
                    </li>
                    <li className = "nav-item">
                        <a href = "" className = "nav-link text-body"><p>Contact</p></a>
                    </li>
                </ul>

              </div>

            </div>

           </nav>
        </div>
        
      </div>
    )
  }
}

export default App
