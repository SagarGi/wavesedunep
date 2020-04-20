import React, { Component } from 'react'
import Secondfooter from'./Secondfooter.js'
import Footer from'./footer.js'
import './AboutPage.css'

class AboutPage extends Component
{
    render()
    {
        return(
            <div>
               <img className = "aboutus" src = { require('./images/aboutus.jpg')}></img>
                 <div className = "container">
                     <h1 className = "mt-5">Waves Education Nepal</h1>
                     <hr></hr>
              
                </div>
                <Secondfooter />
                <Footer />
            </div>
        )
    }
}

export default AboutPage