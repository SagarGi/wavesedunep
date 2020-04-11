import React from 'react'
import './ourteam.css'

const Ourteam = () =>
{
    return(
       <div className = "main-ourteam">
           <div className = "container">

           <p className = "heading-para">OUR TEAM</p>
            <hr></hr>

               <div className = "row mt-5">

                   <div className = "col-lg-4 text-center">

                       <img className = "ourteam-photo" src = {require('./images/bijay.jpg')} style={{width: "220px"}}></img>
                       <h3>Bijay Nepali</h3>
                       <h6>Director</h6>
                       <p>Waves Education Nepal</p>
                   </div>

                    <div className = "col-lg-4 text-center">

                       <img className = "ourteam-photo"  src = {require('./images/manzu.jpg')} style={{width: "220px"}}></img>
                       <h3>Manzu Nepali</h3>
                       <h6>Founder</h6>
                       <p>Waves Education Nepal</p>
                   </div>

                    <div className = "col-lg-4 text-center">

                       <img className = "ourteam-photo"  src = {require('./images/mansa.jpg')} style={{width: "220px"}}></img>
                       <h3>Mansa</h3>
                       <h6>Receptionist</h6>
                       <p>Waves Education Nepal</p>
                   </div>

               </div>

           </div>
       </div>
    )
}

export default Ourteam