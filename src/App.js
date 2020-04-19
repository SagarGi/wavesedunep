import React, { Component } from 'react';
import Navbar from './Navbar.js'
import {Route, Switch} from 'react-router-dom'
import Home from './Home.js'
import FreeCounselling from './FreeCounselling.js'
import AboutPage from './AboutPage.js';
import ContactPage from './ContactPage.js'
import Servicespage from './ServicesPage.js'

class App extends Component
{
  constructor(props)
  {
    super(props)
  }
  

    render()
    {
        return(
            <div className = "main">
              <Navbar />
              <Switch>
              <Route exact path = "/" component = {Home}/>
              <Route exact path = "/home" component = {Home}/>
              <Route exact path = "/freecounselling" component = {FreeCounselling}></Route>
              <Route exact path = "/about" component = {AboutPage}></Route>
              <Route exact path = "/contact" component = {ContactPage}></Route>
              <Route exact path = "/services" component = {Servicespage}></Route>


              </Switch>
            </div>
          )
    }
}

export default App