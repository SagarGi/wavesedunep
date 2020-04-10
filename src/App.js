import React, { Component } from 'react';
import './App.css'

class App extends Component
{
  render()
  {
    return(
      <div className = "main">

        <div className = "wrapper">
          
           <nav className = "navbar navbar-expand-lg navbar-light  static-top">

            <div className = "container">

              <a href = "" className = "navbar-brand"><img src = {require('./images/waveslogo.png')} alt = "logo" className = "logo" /></a>
                {/* button when responsive */}
              <button className = "navbar-toggler" type = "button" data-toggle = "collapse" data-target = "#collapsenavbar">
                <span className =  "navbar-toggler-icon"></span>
              </button>

              {/* menus */}

              <div className = "collapse navbar-collapse text-center" id = "collapsenavbar">

                <ul className = "navbar-nav">
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
           
           <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner" style = {{height: "60vh"}}>
                <div className="carousel-item active">
                  <img className="img-fluid d-block w-100" src = {require('./images/studyuk.jpg')}  alt="First slide" />
                </div>
                <div class="carousel-item">
                  <img className="img-fluid d-block w-100" src = {require('./images/studyjapan.jpg')} alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="img-fluid d-block w-100" src = {require('./images/studyaus.jpg')} alt="Third slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>

        </div>
      
      </div>
    )
  }
}

export default App
