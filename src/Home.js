import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Secondfooter from './Secondfooter.js'
import Carousel from './Carousel.js';
import About from './About.js'
import Services from './Services.js'
import Footer from './footer.js'
import Ourteam from './ourteam.js'

class Home extends Component
{
    render()
    {
        return(
            <div>
                <Carousel />
                <About />
                <Services />
                <Ourteam />
                <Secondfooter />
                <Footer />
            </div>
        )
    }
}

export default Home