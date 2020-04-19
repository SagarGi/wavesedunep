import React, { Component } from 'react'
import Secondfooter from './Secondfooter.js'
import Carousel from './Carousel.js';
import About from './About.js'
import Services from './Services.js'
import Footer from './footer.js'
import Ourteam from './ourteam.js'
import './Home.css'

class Home extends Component
{
    render()
    {
        return(
            <div className = "main">
                <div className = "wrapper"> 
                <Carousel />
                <About />
                <Services />
                <Ourteam />
                <Secondfooter />
                <Footer />
                </div>
            </div>
        )
    }
}

export default Home