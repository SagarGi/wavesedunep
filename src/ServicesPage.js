import React, { Component } from 'react'
import Secondfooter from'./Secondfooter.js'
import Footer from'./footer.js'
import './ServicesPage.css'

class ServicesPage extends Component
{
    render()
    {
        return(
            <div>
               <img className = "contactusimage" src = { require('./images/ourservices.jpg')}></img>
                 <div className = "container">
                     <h1 className = "mt-5 font-weight-bold">1. STUDY ABROAD</h1>
                     <hr className = "servicesheading"></hr>

                     <div className = "container">
                         <div className = "row pb-5">
                             <div className = "col-lg-6">
                             <div class="card">
                                <img class="card-img-top" src={require('./images/uk.jpeg')} alt="Card image cap" />
                                <div class="card-body">
                                   <h6>Study in UK</h6>
                                </div>
                                </div>
                             </div>

                             <div className = "col-lg-6">

                             <div class="card">
                                <img class="card-img-top" src={require('./images/aus.jpg')} alt="Card image cap" />
                                <div class="card-body">
                                <h6>Study in Australia</h6>                      
                                </div>
                                </div>

                            </div>

                            <div className = "col-lg-6">
                             <div class="card">
                                <img class="card-img-top" src={require('./images/nz.jpg')} alt="Card image cap" />
                                <div class="card-body">
                                <h6>Study in New Zealand</h6>
                                </div>
                                </div>
                             </div>


                             <div className = "col-lg-6">
                             <div class="card">
                                <img class="card-img-top" src={require('./images/malta.jpg')} alt="Card image cap" />
                                <div class="card-body">
                                <h6>Study in Malta</h6>
                                </div>
                                </div>
                             </div>

                             <div className = "col-lg-6">
                             <div class="card">
                                <img class="card-img-top" src={require('./images/cyprus.jpg')} alt="Card image cap" />
                                <div class="card-body">
                                <h6>Study in Cyprus</h6>
                                </div>
                                </div>
                             </div>

                             <div className = "col-lg-6">
                             <div class="card">
                                <img class="card-img-top" src={require('./images/japan.jpeg')} alt="Card image cap" />
                                <div class="card-body">
                                <h6>Study in Japan</h6>
                                </div>
                                </div>
                             </div>


                         </div>
                     </div>


                     {/* Test Preparation */}

                     <h1 className = "mt-5 font-weight-bold">2. TEST PREPARATION</h1>
                     <hr className = "servicesheading"></hr>

                </div>
                <Secondfooter />
                <Footer />
            </div>
        )
    }
}

export default ServicesPage