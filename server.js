const http = require("http");
const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')
const path = require('path')


const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));
const server = http.createServer(app);
const port = process.env.PORT || 3001

// your part
app.post('/sendEmail/form',(req,res) =>{

  const email = req.body.toEmail
  const subject = req.body.toSubject
  const mail = req.body.toMail

  console.log(email)
  console.log(subject)
  console.log(mail)
})


server.listen(port, ()=>{
    console.log("Server is listening...........")
})