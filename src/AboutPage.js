import React, { Component } from 'react'
import Secondfooter from'./Secondfooter.js'
import Footer from'./footer.js'
import './AboutPage.css'

class AboutPage extends Component
{
    render()
    {
        return(
            <div>
               <img className = "aboutus" src = { require('./images/aboutus.jpg')}></img>
                 <div className = "container">
                <h1 className = " text-center mt-5 mb-4 ">WAVES EDUCATION</h1>
                <hr className = "aboutushr"></hr>
                </div>
                <div className = "container">

                    <div className = "row">

                        <div className = "col-lg-2">

                        </div>

                        <div className = "col-lg-8">

                        Waves Education Nepal (WEN) is an innovative and specialist educational consultancy service provider. In service of students since 2007, we specialize in educational counseling, recruitment and enrollment at overseas universities and colleges for more than 12 years. Adhering to the company’s policy of decentralization, WEN has now expanded to a total number of 10 offices in Australia and Nepal.
                        <br></br>
                        <br></br>
                        Representing over 100+ universities and colleges from various countries (Australia, New Zealand, USA, UK, Canada, Europe and more), we are fully prepared to serve our students with the best possible guidance for their education abroad.  In addition to the guidance and counseling, we have also been conducting preparation classes for IELTS, PTE, TOEFL and SAT, run by highly professional and experienced language instructors.
                        <br></br>
                        <br></br>
                        WEN consists of a dedicated team of professionals with many combined years of experience within education, training, consulting and management, believing in quality service and professional delivery. All of the Educational Counselors at Waves Education Nepal hold professional certifications, and it is a pre-requisite for all our appointed counselors.
                        <br></br>
                        <br></br>
                        At waves, we strive for perfection, helping students make best use of their abilities while taking them closer to the academic opportunities around the globe. We aim to make this institution the best nexus between Universities/Colleges and students all around the world.
                        </div>

                        <div className = "col-lg-2">

                        </div>

                    </div>
                   
                </div>
                <Secondfooter />
                <Footer />
            </div>
        )
    }
}

export default AboutPage