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
                     <div class="mapouter"><div class="gmap_canvas">
                    <iframe id="gmap_canvas" src="https://www.google.com.qa/maps/d/u/0/embed?mid=1vI2zn46tR6shajRxDytHMnC4_cD2LV8V" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                    </iframe>
                    <a href="https://techwithlove.com/"></a>
                    </div>

                    </div>

                     <div className = "container">

                         <div className = 'row'>
                         <div className = "col-lg-6">
                         <p className = "mahendraoffice">Mahendra Pool Office <br></br> Pokhara 33700, Nepal<br></br>Tel: 061-533352 <br></br>Phohe: 9829107652, 9829107632</p>
                         </div>

                         <div className = "col-lg-6">
                             <h5>BUSINESS HOURS</h5>
                         <p className = "businesshours"> Mon:	9:30 AM – 6:00 PM<br></br>Tue:	9:30 AM – 6:00 PM <br></br>Wed:	9:30 AM – 6:00 PM<br></br>
                         Thu:	9:30 AM – 6:00 PM <br></br>
                         Fri:	9:30 AM – 3:30 PM <br></br>
                         Sat:	Closed<br></br>
                         Sun:	9:30 AM – 6:00 PM
                         </p>
                         </div>
                         </div>
                     </div>
                     
                </div>
                <Secondfooter />
                <Footer />
            </div>
        )
    }
}

export default ContactPage




