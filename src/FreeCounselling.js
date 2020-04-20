import React, { Component } from 'react'
import './FreeCounselling.css'
import Secondfooter from'./Secondfooter.js'
import Footer from'./footer.js'

class FreeCounselling extends Component
{
    render()
    {
        return(
            <div>
                 <img className = "contactusimage" src = { require('./images/freecounselling.jpg')}></img>


                 <div className = "container heading text-center">
                    <h1 className = "freecounsell">Free Counselling From</h1>
                 </div>
                <div className = 'container formdiv'>
              
                <form action="/action_page.php">
                    <label for="fname">Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your last name.." />
                    <label for="number">Mobile Number</label>
                    <input type="text" id="number" name="number" placeholder="Your Number.." />
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="subject.." />
                    <label for="subject">Comment</label><br></br>
                    <textarea id="comment" name="comment"></textarea>
                    <input type="submit" value="Submit" />
                </form>

                </div>
                <Secondfooter />
                <Footer />
                
            </div>
        )
    }
}
export default FreeCounselling