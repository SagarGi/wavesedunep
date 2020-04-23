import React, { Component } from 'react'
import './secondfooter.css'
class Secondfooter extends Component
{
    render()
    {
      return(
      <div className = "second-footer">
     
      <div className = "container">
        <div className = "row pt-5 pb-5">
           <div className = "col-xl-3 col-lg-3 col-md-6 col-sm-6 text-white text-left">
            <p className = "text-white" style = {{fontSize: "20px"}}>Consultancy:</p>
            <hr style = {{border: "0.5px solid white"}}></hr>
            <ul className = "list-unstyled">
              <a style = {{textDecoration: "none" , color : "white"}} href = "/about"><li>About Us</li></a>
              <a style = {{textDecoration: "none" , color : "white"}} href = "/freecounselling"><li>Counseling</li></a>
              <a style = {{textDecoration: "none" , color : "white"}} href = "/services"><li>Our Services</li></a>
              <a style = {{textDecoration: "none" , color : "white"}} href = "/home"><li>Home</li></a>
            </ul>
          </div>
          <div className = "col-xl-3 col-lg-3 col-md-6 col-sm-6 text-white text-left">
          <p className = "text-white" style = {{fontSize: "20px"}}>Contact us:</p>
          <hr style = {{border: "0.5px solid white"}}></hr>
            <ul className = "list-unstyled">
              <li><i className='fas fa-phone-alt' /> 061-533352</li>
              <li><i className='fas fa-phone-alt'/> 9829107652</li>
              <li><i className='fas fa-phone-alt'/> 9843268743</li>
              <li><i class='fas fa-envelope' /> sagargurung5005@gmail.com</li>
            </ul>
          </div>

          <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 text-white text-center">

          <p className = "text-white" style = {{fontSize: "20px"}}>Follow us:</p>
          <hr style = {{border: "0.5px solid white"}}></hr>
            <a href="https://www.facebook.com/wenpokhara" target = "_blank" class="fa fa-facebook"></a>
            <a href="https://www.instagram.com/waveseducationnepal9/?hl=en" target = "_blank" class="fa fa-instagram"></a>
          </div>
        </div>
      </div>
    
  </div>
        )
    }
}

export default Secondfooter