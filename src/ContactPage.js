import React, { Component } from 'react'
import Secondfooter from'./Secondfooter.js'
import Footer from'./footer.js'

class ContactPage extends Component
{
    render()
    {
        return(
            <div>
               <img className = "contactusimage" src = { require('./images/contactus.jpg')}></img>
                 <div className = "container">
                     <h1 className = "mt-5">Contact Us</h1>
                </div>
                <Secondfooter />
                <Footer />
            </div>
        )
    }
}

export default ContactPage