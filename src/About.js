import React, { Component } from 'react'
import './about.css'
class About extends Component
{
    render()
    {
        return(
            <div>
                 <a name = "aboutus"></a>
                  <div className = "container mt-4">
      
                    <p className = "heading-para">WAVES EDUCATION</p>
                    <hr className = "horizontal" ></hr>
      
                    <p className = "about-para">Waves Education Nepal (WEN) is an innovative and specialist educational<br></br>
                    consultancy service provider. In service of students since 2012, we specialize in<br></br>
                    educational counseling, recruitment and enrollment at overseas universities and <br></br>
                    colleges for more than 5 years. Adhering to the company’s policy of decentralization, <br></br>
                    it is located at BG road Mahendra Pool, Pokhara, Nepal.
                    </p>
                  </div>
            </div>
        )
    }
}

export default About