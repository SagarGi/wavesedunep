import React, { Component } from 'react';
import Footer from './footer.js'
import Ourteam from './ourteam.js'
import Navbar from './Navbar.js'
import Carousel from './Carousel.js';
import About from './About.js'
import Services from './Services.js'
import Secondfooter from './Secondfooter.js'

class App extends Component
{
    render()
    {
        return(
            <div className = "main">
                
              <Navbar />
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

export default App