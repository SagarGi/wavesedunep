import React, { Component } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

class Navbar extends Component
{
    render()
    {
        

        return(
            <div>
                <nav className = "navbar navbar-expand-lg navbar-light bg-white fixed-top">
      
                <div className = "container">

                <Link className = "navbar-brand" to = "/wavesedunep"><img src = {require('./images/waveslogo.png')} alt = "logo" className = "logo" /></Link>
                    {/* button when responsive */}
                <button className = "navbar-toggler" type = "button" data-toggle = "collapse" data-target = "#collapsenavbar">
                    <span className =  "navbar-toggler-icon"></span>
                </button>

                {/* menus */}

                <div className = "collapse navbar-collapse text-center" id = "collapsenavbar">

                    <ul className = "navbar-nav">
                        <li className = "nav-item">
                            <Link className = "nav-link text-body nav-head" to = "/home">Home</Link>
                        </li>
                        <li className = "nav-item">
                        <Link className = "nav-link text-body nav-head" to = "/freecounselling" >Free Counselling</Link>
                           
                        </li>
                        <li className = "nav-item">
                        <Link className = "nav-link text-body nav-head" to = "/services" >Services</Link>
                        </li>
                        <li className = "nav-item">
                        <Link className = "nav-link text-body nav-head" to = "/about" >About Us</Link>
                        </li>
                        <li className = "nav-item">
                            <Link className = "nav-link text-body nav-head" to = "/contact" >Contact</Link>                        
                        </li>
                    </ul>

                </div>

                </div>

                </nav>
            </div>
        )
    }
}

export default Navbar