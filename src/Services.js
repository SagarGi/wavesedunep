import React, { Component } from 'react'
import './services.css'
class About extends Component
{
    render()
    {
        return(
            <div>
             <a name = "ourservices"></a>
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
                    <div class="centered text-white"><p className = "register">Register For Free Counselling!!</p></div>
      
                    </a>
      
                  </div>
      
                  {/* youtube video */}
                  <div className = "container">
                    <div>
                    <iframe className = "youtube" src="https://www.youtube.com/embed/ejc59Zh_B-U"></iframe>
                    </div>
                 
                  </div>
            </div>
        )
    }
}

export default About