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
                                <div class="card-body card-body-study">
                                   <h6>Study in UK</h6>
                                </div>
                                </div>
                             </div>

                             <div className = "col-lg-6">

                             <div class="card">
                                <img class="card-img-top" src={require('./images/aus.jpg')} alt="Card image cap" />
                                <div class="card-body card-body-study">
                                <h6>Study in Australia</h6>                      
                                </div>
                                </div>

                            </div>

                            <div className = "col-lg-6">
                             <div class="card">
                                <img class="card-img-top" src={require('./images/nz.jpg')} alt="Card image cap" />
                                <div class="card-body card-body-study">
                                <h6>Study in New Zealand</h6>
                                </div>
                                </div>
                             </div>


                             <div className = "col-lg-6">
                             <div class="card">
                                <img class="card-img-top" src={require('./images/malta.jpg')} alt="Card image cap" />
                                <div class="card-body card-body-study">
                                <h6>Study in Malta</h6>
                                </div>
                                </div>
                             </div>

                             <div className = "col-lg-6">
                             <div class="card">
                                <img class="card-img-top" src={require('./images/cyprus.jpg')} alt="Card image cap" />
                                <div class="card-body card-body-study">
                                <h6>Study in Cyprus</h6>
                                </div>
                                </div>
                             </div>

                             <div className = "col-lg-6">
                             <div class="card">
                                <img class="card-img-top" src={require('./images/japan.jpeg')} alt="Card image cap" />
                                <div class="card-body card-body-study">
                                <h6>Study in Japan</h6>
                                </div>
                                </div>
                             </div>


                         </div>
                     </div>


                     {/* Test Preparation */}

                     <h1 className = "mt-5 font-weight-bold">2. TEST PREPARATION</h1>
                     <hr className = "servicesheading"></hr>
                    <img className = "ielts" src = { require('./images/ielts.jpg')}></img>

                    <div className = "container">

                        <div className = "row">

                            <div className = "col-lg-2">
                            </div>

                            <div className = "col-lg-8 mt-5">

                                <p>IELTS, the International English Language Testing System, is designed to assess the language ability of
                                 candidates who need to study or work where English is used as the language of communication. IELTS is required
                                for entry to university in the UK and other countries. This test is managed by British Council, IDP: IELTS Australia and Cambridge Assessment English.</p>

                                <p>There are two types of IELTS test: Academic and General Training. Listening and Speaking are the same for 
                                the both tests, however the topic of the Reading and Writing sections differs relying upon which test the
                                candidate takes. IELTS can be taken either on paper or computer depending on the choice of the test taker.
                                 The test score is valid for two years from the test date.</p>

                                 <p>There are four principle parts to the test: Speaking and Writing (together), Reading and Listening. There is an optional
                                10-minute break between the Reading and Listening parts.</p>

                                 <div className = "row">

                                     <div className = "col-lg-6">

                                     <div class="card">
                                        <div class="card-header bg-primary text-white">Listening</div>
                                        <div class="card-body">
                                        4 sections, 40 questions, 30 minutes <br></br><br></br>
                                        Section 1: a conversation between two people<br></br>
                                        Section 2: a monologue set in an everyday social context<br></br>
                                        Section 3: a conversation between up to four people set in an educational or training context<br></br>
                                        Section 3: a conversation between up to four people set in an educational or training context<br></br>
                                        Each section is heard once only
                                        </div>  
                                    </div>

                                     </div>

                                     <div className = "col-lg-6">

                                     <div class="card">
                                        <div class="card-header bg-primary text-white">Speaking</div>
                                        <div class="card-body">
                                        An interview, 15 minutes<br></br><br></br>
                                        Part 1 Introduction and interview<br></br>
                                        Part 2 Individual long turn (you have to talk about a topic)<br></br>
                                        Part 3 Two-way discussion (The examiner asks further questions which are connected to the topic of Part 2.)<br></br>
                                        </div>  
                                    </div>

                                     </div>

                                     <div className = "col-lg-6">
                                     <div class="card">
                                        <div class="card-header bg-primary text-white">Reading</div>
                                        <div class="card-body">

                                        3 sections, 40 questions, 60 minutes <br></br><br></br>
                                        Section 1: two or three short factual texts<br></br>
                                        Section 2: contains two short factual texts focusing on work-related issues<br></br>
                                        Sectin 3: one longer, more complex text
                                        </div>  
                                    </div>

                                     </div>

                                     <div className = "col-lg-6">

                                     <div class="card">
                                        <div class="card-header bg-primary text-white">Writing</div>
                                        <div class="card-body">
                                        Part 1: write a letter requesting information or explaining a situation. <br></br>
                                        Part 2: write an essay in response to a point of view, argument or problem <br></br>
                                    </div>  
                                    </div>

                                     </div>

                                 </div>

                                 <h5>Levels and Score</h5>
                                 <p>You get a score between 1 and 9. Half scores such as 6.5 are possible. Universities often demand an IELTS score of 6 or 7.<br></br>
                                They may also demand a minimum score in each of the 4 sections.</p>

                            </div>

                            <div className = "col-lg-2">
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

export default ServicesPage