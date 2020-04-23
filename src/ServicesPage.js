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
                     <h1 className = "mt-5 font-weight-bold">STUDY ABROAD</h1>
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

                     <h1 className = "mt-5 font-weight-bold">TEST PREPARATION</h1>
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
                                        <p>4 sections, 40 questions, 30 minutes <br></br><br></br>
                                        Section 1: a conversation between two people<br></br>
                                        Section 2: a monologue set in an everyday social context<br></br>
                                        Section 3: a conversation between up to four people set in an educational or training context<br></br>
                                        Section 3: a conversation between up to four people set in an educational or training context<br></br>
                                        Each section is heard once only</p>
                                        </div>  
                                    </div>

                                     </div>

                                     <div className = "col-lg-6">

                                     <div class="card">
                                        <div class="card-header bg-primary text-white">Speaking</div>
                                        <div class="card-body">
                                        <p>An interview, 15 minutes<br></br><br></br>
                                        Part 1 Introduction and interview<br></br>
                                        Part 2 Individual long turn (you have to talk about a topic)<br></br>
                                        Part 3 Two-way discussion (The examiner asks further questions which are connected to the topic of Part 2.)</p>
                                        <br></br>
                                        </div>  
                                    </div>

                                     </div>

                                     <div className = "col-lg-6">
                                     <div class="card">
                                        <div class="card-header bg-primary text-white">Reading</div>
                                        <div class="card-body">

                                        <p>3 sections, 40 questions, 60 minutes <br></br><br></br>
                                        Section 1: two or three short factual texts<br></br>
                                        Section 2: contains two short factual texts focusing on work-related issues<br></br>
                                        Sectin 3: one longer, more complex text</p>
                                        </div>  
                                    </div>

                                     </div>

                                     <div className = "col-lg-6">

                                     <div class="card">
                                        <div class="card-header bg-primary text-white">Writing</div>
                                        <div class="card-body">
                                        <p>Part 1: write a letter requesting information or explaining a situation. <br></br>
                                        Part 2: write an essay in response to a point of view, argument or problem.</p> <br></br>
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


                    {/* japanese language */}
                    <h1 className = "mt-5 font-weight-bold">JAPANESE LANGUAGE</h1>
                     <hr className = "servicesheading"></hr>
                     <img className = "japanese" src = { require('./images/japanese.jpg')}></img>

                    <div className = "container">

                        <div className = "row">

                            <div className = "col-lg-2">

                            </div>

                            <div className = "col-lg-8">
                            
                            <p>The JLPT has five levels: N1, N2, N3, N4 and N5. The easiest level is N5 and the most difficult level is N1.</p>
                            <p>N4 and N5 measure the level of understanding of basic Japanese mainly learned in class. N1and N2 measure the level of understanding of Japanese used in a broad range of scenes 
                            in actual everyday life. N3 is a bridging level between N1/N2 and N4/N5.</p>

                            <p>Linguistic competence required for the JLPT is expressed in terms of language activities, such as Reading and Listening, as shown in the table below. Wh
                            t noted in the table, Language Knowledge, such as Vocabulary and Grammar, is also required for successful execution of these activities.</p>
                                <div className = "row">

                                    <div className = 'col-lg-6'>

                                    <div class="card">
                                        <div class="card-header bg-primary text-white">N1</div>
                                        <div class="card-body">
                                        <h4>Reading</h4>
                                        One is able to read writings with logical complexity and/or abstract writings on a variety of topics, such as newspaper
                                        editorials and critiques, and comprehend both their structures and contents. <br></br> <br></br>
                                        <h4>Writing</h4>
                                        <p>One is able to comprehend orally presented materials such as coherent conversations, news reports, and lectures, 
                                        spoken at natural speed in a broad variety of settings, and is able to follow their ideas and comprehend their
                                         contents comprehensively. One is also able to understand the details of the presented materials such as the 
                                         relationships among the people involved, the logical structures, and the essential points.</p>
                                    </div>  
                                    </div>

                                    </div>

                                    <div className = 'col-lg-6'>

                                    <div class="card">
                                        <div class="card-header bg-primary text-white">N2</div>
                                        <div class="card-body">

                                        <h4>Reading</h4>
                                        <p>One is able to read materials written clearly on a variety of topics, such as articles and commentaries in newspapers and magazines as well as simple critiques, and comprehend their contents.
                                        ・One is also able to read written materials on general topics and follow their narratives as well as understand the intent of the writers.</p><br></br> <br></br>
                                        <h4>Writing</h4>
                                        <p>One is able to comprehend orally presented materials such as coherent conversations and news reports, spoken at nearly natural speed in everyday situations as well as in a variety of settings,
                                         and is able to follow their ideas and comprehend their contents. One is also able to understand the relationships among the people 
                                         involved and the essential points of the presented materials.</p>
                                       
                                    </div>  
                                    </div>

                                    </div>

                                    <div className = 'col-lg-6'>

                                    <div class="card">
                                        <div class="card-header bg-primary text-white">N3</div>
                                        <div class="card-body">
                                        <h4>Reading</h4>
                                        <p>One is able to read and understand written materials with specific contents concerning everyday topics.
                                        ・One is also able to grasp summary information such as newspaper headlines.
                                        ・In addition, one is also able to read slightly difficult writings encountered in everyday situations and understand the main points of the content if some alternative phrases are available to aid one’s understanding.</p><br></br> <br></br>
                                        <h4>Writing</h4>
                                        <p>One is able to listen and comprehend coherent conversations in everyday situations, spoken at near-natural speed, and is generally able to follow their contents as well as grasp the relationships among the people involved.</p>
                                    </div>  
                                    </div>

                                    </div>

                                    <div className = 'col-lg-6'>

                                    <div class="card">
                                        <div class="card-header bg-primary text-white">N4</div>
                                        <div class="card-body">
                                        <h4>Reading</h4>
                                        <p>One is able to read and understand passages on familiar daily topics written in basic vocabulary and kanji.</p><br></br> <br></br>
                                        <h4>Writing</h4>
                                        <p>One is able to listen and comprehend conversations encountered in daily life and generally follow their contents, provided that they are spoken slowly.</p>
                                    </div>  
                                    </div>

                                    </div>

                                    <div className = 'col-lg-6'>

                                    <div class="card">
                                        <div class="card-header bg-primary text-white">N5</div>
                                        <div class="card-body">
                                        <h4>Reading</h4>
                                        <p>One is able to read and understand typical expressions and sentences written in hiragana, katakana, and basic kanji.</p><br></br> <br></br>
                                        <h4>Writing</h4>
                                        <p>One is able to listen and comprehend conversations about topics regularly encountered in daily life and classroom situations, and is able to pick up necessary information from short conversations spoken slowly.</p>
                                    </div>  
                                    </div>

                                    </div>

                                </div>

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