import React, { Component } from 'react';
import './Navbar.css'
import './aboutus.css'
import Footer from './footer.js'
import Ourteam from './ourteam.js'

class App extends Component
{
  render()
  {
    return(
      <div className = "main">
          
        <nav className = "navbar navbar-expand-lg navbar-light">

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
                      <a href = "" className = "nav-link text-body"><p className = "nav-head">Home</p></a>
                  </li>
                  <li className = "nav-item">
                      <a href = "" className = "nav-link text-body"><p className = "nav-head">Free Counseling</p></a>
                  </li>
                  <li className = "nav-item">
                      <a href = "" className = "nav-link text-body"><p className = "nav-head">Services</p></a>
                  </li>
                  <li className = "nav-item">
                      <a href = "" className = "nav-link text-body"><p className = "nav-head">About Us</p></a>
                  </li>
                  <li className = "nav-item">
                      <a href = "" className = "nav-link text-body"><p className = "nav-head">Contact</p></a>
                  </li>
              </ul>

          </div>

          </div>

          </nav>

           {/* carousel section */}
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

            {/* about wave education */}

            <div className = "container mt-4">

              <p className = "heading-para">WAVES EDUCATION</p>
              <hr></hr>

              <p className = "about-para">Kangaroo Education Foundation (KEF) is an innovative and specialist educational<br></br>
              consultancy service provider. In service of students since 2007, we specialize in<br></br>
              educational counseling, recruitment and enrollment at overseas universities and <br></br>
              colleges for more than 12 years. Adhering to the company’s policy of decentralization, <br></br>
              to a total number of 8 offices in Australia and Nepal.
              </p>


            </div>

            {/* our services section */}

            <div className = "container text-center">

            <p className = "heading-para">OUR SERVICES</p>
            <hr></hr>

            <div className = "container mt-5">
              <div className = "row">
                <div className = "col-lg-4 text-center bg-dark"> 
                    <i class='services fas fa-user-graduate'></i>
                    <h2>Study Abroad</h2>
                </div>

                <div className = "col-lg-4 text-center bg-danger"> 
                    <a><i class='services fas fa-edit'></i></a>
                    <h2>IELTS Preparation</h2>
                </div>

                <div className = "col-lg-4 text-center bg-success"> 
                    <i class='services fas fa-chalkboard-teacher'></i>
                    <h2>Japanese Language</h2>
                </div>

                </div>
            </div>

             

            </div>

            {/* free counselling */}

            <div className = "container image-container">

              <a href = "">

                <div className = "hover-image">
                <img className = "free-counselling" src = { require('./images/counselling.jpg')}></img>
                </div>
              <div class="centered text-white"><h1>Click Here<br></br> <h3>Free Counselling</h3></h1></div>

              </a>

            </div>

            {/* youtube video */}
            <div className = "container">
              <div>
              <iframe className = "youtube" src="https://www.youtube.com/embed/ejc59Zh_B-U"></iframe>
              </div>
           
            </div>

            {/* our team */}

            <Ourteam />

            <div className = "second-footer">


              <div className = "container">
                <div className = "row pt-5 pb-5">

                   <div className = "col-xl-3 col-lg-3 col-md-6 col-sm-6 text-white text-left">

                    <p style = {{fontSize: "20px"}}>Consultancy:</p>
                    <hr style = {{border: "0.5px solid white"}}></hr>
                    <ul className = "list-unstyled">
                      <li>About Us</li>
                      <li>Counseling</li>
                      <li>Our Services</li>
                      <li>Home</li>
                    </ul>

                  </div>

                  <div className = "col-xl-3 col-lg-3 col-md-6 col-sm-6 text-white text-left">

                  <p style = {{fontSize: "20px"}}>Contact us:</p>
                  <hr style = {{border: "0.5px solid white"}}></hr>
                    <ul className = "list-unstyled">
                      <li><i className='fas fa-phone-alt' /> 061-533352</li>
                      <li><i className='fas fa-phone-alt'/> 9829107652</li>
                      <li><i className='fas fa-phone-alt'/> 9843268743</li>
                      <li><i class='fas fa-envelope' /> sagargurung5005@gmail.com</li>
                    </ul>

                  </div>

                  <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 text-white text-center">

                  <p style = {{fontSize: "20px"}}>Follow us:</p>
                  <hr style = {{border: "0.5px solid white"}}></hr>
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-instagram"></a>

                  </div>

                </div>
               

              </div>

              

            </div>
        <Footer />
      
      </div>
    )
  }
}

export default App
