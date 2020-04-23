import React from 'react'
import './ourteam.css'

const Ourteam = () =>
{
    return(
       <div className = "main-ourteam">
           <div className = "container">

           <p className = "heading-para">OUR TEAM</p>
            <hr className = "horizontal"></hr>

               <div className = "row mt-5">

                   <div className = "col-xl-4 col-lg-4 col-md-6  text-center">

                       <img className = "ourteam-photo" src = {require('./images/bijay.jpg')} style={{width: "220px"}}></img>
                       <h3>Bijay Nepali</h3>
                       <h6 className = "text-body">Director</h6>
                       <p className = "text-body">Waves Education Nepal</p>
                   </div>

                    <div className = "col-xl-4 col-lg-4 col-md-6 text-center">

                       <img className = "ourteam-photo"  src = {require('./images/manzu.jpg')} style={{width: "220px"}}></img>
                       <h3>Manzu Nepali</h3>
                       <h6 className = "text-body">Founder</h6>
                       <p className = "text-body">Waves Education Nepal</p>
                   </div>

                    <div className = "col-xl-4 col-lg-4 col-md-12 text-center">

                       <img className = "ourteam-photo"  src = {require('./images/mansa.jpg')} style={{width: "220px"}}></img>
                       <h3>Mansa</h3>
                       <h6 className = "text-body">Receptionist</h6>
                       <p className = "text-body">Waves Education Nepal</p>
                   </div>

               </div>

           </div>
       </div>
    )
}

export default Ourteam