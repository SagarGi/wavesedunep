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
                 <div className = "container">
                     <h1 className = "mt-5">Free Counselling</h1>
                </div>
                <div className = 'container formdiv'>

                <form action="/action_page.php">
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your last name.." />

                    <label for="country">Country</label>
                    <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                    </select>
                
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