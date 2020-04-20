const http = require("http");
const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')
const path = require('path')
const nodemailer = require('nodemailer')


const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));
const server = http.createServer(app);
const port = process.env.PORT || 3001
require('dotenv').config()

// your part
app.post('/sendEmail/form',(req,res) =>{

  const email = req.body.fromEmail
  const subject = req.body.fromSubject
  const mail = req.body.fromMail

  let transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  })


  let mailOption = {
    from : 'sagargurung2002@gmail.com',
    to : 'sagargurung1001@gmail.com',
    subject : subject,
    text : mail

  }

  transporter.sendMail(mailOption,  (err, data) => {
    if(err)
    {
      console.log('error sending mail!!' + err)
    }
    else
    {
      console.log('mail sent!!!')
    }
  })

  // console.log(email)
  // console.log(subject)
  // console.log(mail)


})


server.listen(port, ()=>{
    console.log("Server is listening...........")
})