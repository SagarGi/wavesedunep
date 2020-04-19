import React, { Component } from 'react'
import Secondfooter from'./Secondfooter.js'
import Footer from'./footer.js'

class AboutPage extends Component
{
    render()
    {
        return(
            <div>
               <img className = "contactusimage" src = { require('./images/aboutus.jpg')}></img>
                 <div className = "container">
                     <h1 className = "mt-5">About Waves Education Nepal</h1>
                </div>
                <Secondfooter />
                <Footer />
            </div>
        )
    }
}

export default AboutPage