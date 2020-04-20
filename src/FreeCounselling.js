import React, { Component, Suspense } from 'react'
import './FreeCounselling.css'
import Secondfooter from'./Secondfooter.js'
import Footer from'./footer.js'
import axios from 'axios'

class FreeCounselling extends Component
{
    constructor()
    {
        super();
        this.state = {
            name : "",
            email : "",
            mobileNumber : "",
            subject : "",
            comment : "",
            nameError : "",
            emailError : "",
            mobileNumberError : "",
            subjectError : "",
            commentError : ""

        }

        this.handleSubmit = this.handleSubmit.bind(this)

    
    }

    // very simple validation of form

    handleSubmit(event)
    {
        event.preventDefault()
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // validation
        if(this.state.name === "" && this.state.email === "" && this.state.mobileNumber === "" && this.state.subject === "" && this.state.comment === "")
        {
            this.setState({
                nameError : "Please enter your name!!" ,
                emailError : "Please enter your mail!!",
                mobileNumberError : "Please enter your mobile number!!",
                subjectError: "Subject is required!!",
                commentError : "comment is required!!"
        })
        }
        else if(this.state.name === "")
        {
            this.setState({
                nameError : "Please enter your name!!",
        })
        }
        else if(this.state.email === "")
        {
            this.setState({
                emailError : "Please enter your mail!!"
        })
        }

        else if(this.state.mobileNumber === "")
        {
            this.setState({
                mobileNumberError : "Please enter your mobile number!!"
        })
        }

        else if(this.state.subject === "")
        {
            this.setState({             
                subjectError: "Subject is required!!",
        })
        }
        else if(this.state.comment === "")
        {
            this.setState({
                commentError : "comment is required!!"
        })
        }
        else if(!this.state.email.match(mailformat))
       {
           this.setState({emailError : "Invalid Email!!"})
       }
       else if(this.state.mobileNumber.length !== 10)
       {
           this.setState({mobileNumberError: "Please Enter Correct Number!!"})
       }
       else{
           document.getElementById('myForm').reset()
           alert("Submitted!!! We will contact you soon...")

           const {email, subject, comment} = this.state
           axios.post('/sendEmail/form',{
            toEmail : email,
            toSubject : subject,
            toMail : comment
          })

       }
    }

    hideNameError()
    {
         this.setState({nameError : ""}) 
    }
    hideEmailError()
    {
         this.setState({emailError : ""}) 
    }
    hideMobileError()
    {
         this.setState({mobileNumberError : ""}) 
    }
    hideSubjectError()
    {
         this.setState({subjectError : ""}) 
    }
    hideCommentError()
    {
         this.setState({commentError : ""}) 
    }



    render()
    {
        return(
            <div>
                 <img className = "contactusimage" src = { require('./images/freecounselling.jpg')}></img>


                 <div className = "container heading text-center">
                    <h1 className = "freecounsell">Free Counselling From</h1>
                 </div>
                <div className = 'container formdiv'>
              
                <form id = "myForm" onSubmit = {(event) => this.handleSubmit}>
                    <label for="fname">Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." onChange = {(event) => this.setState({name: event.target.value})} onClick = {this.hideNameError.bind(this)}/>
                    <p className = "error">{this.state.nameError}</p>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your last name.."  onChange = {(event) => this.setState({email: event.target.value})} onClick = {this.hideEmailError.bind(this)}/>
                    <p className = "error">{this.state.emailError}</p>
                    <label for="number">Mobile Number</label>
                    <input type="text" id="number" name="number" placeholder="Your Number.." onChange = {(event) => this.setState({mobileNumber: event.target.value})} onClick = {this.hideMobileError.bind(this)}/>
                    <p className = "error">{this.state.mobileNumberError}</p>
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="subject.." onChange = {(event) => this.setState({subject: event.target.value})} onClick = {this.hideSubjectError.bind(this)}/>
                    <p className = "error">{this.state.subjectError}</p>
                    <label for="subject">Comment</label><br></br>
                    <textarea id="comment" name="comment" onChange = {(event) => this.setState({comment: event.target.value})} onClick = {this.hideCommentError.bind(this)}></textarea>
                    <p className = "error">{this.state.commentError}</p>
                    <input type="submit" value="Submit" onClick = {e => this.handleSubmit(e)}/>
                </form>

                </div>
                <Secondfooter />
                <Footer />
                
            </div>
        )
    }
}
export default FreeCounselling