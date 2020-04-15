import React, { Component } from 'react'
import './carousel.css'
class Carousel extends Component
{
    render()
    {
        return(
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
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
        )
    }
}

export default Carousel