import React, { Component } from 'react'
import Secondfooter from'./Secondfooter.js'
import Footer from'./footer.js'
import './ContactPage.css'

class ContactPage extends Component
{
    render()
    {
        return(
            <div>
               <img className = "contactusimage" src = { require('./images/contactus.jpg')}></img>
                 <div className = "container text-center">
                   
                     <h1>Pokhara Office</h1>
                     <hr className = "mainhr"></hr>
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112494.53134629565!2d83.91964572520206!3d28.22389356152866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995944f2e2d0583%3A0xf8644c579056acf1!2sBP%20Rd%2C%20Pokhara%2033700!5e0!3m2!1sen!2snp!4v1587287261551!5m2!1sen!2snp" className = "direction"  frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                     <p>Mahendra Pool Office <br></br> Pokhara 33700, Nepal<br></br>Tel: 061-533352 <br></br>Phohe: 9829107652, 9829107632</p>
                </div>
                <Secondfooter />
                <Footer />
            </div>
        )
    }
}

export default ContactPage