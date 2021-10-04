const http = require("http");
const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const server = http.createServer(app);
const port = process.env.PORT || 3333;
require("dotenv").config();

// your part
app.post("/sendEmail/form", (req, res) => {
  const email = req.body.fromEmail;
  const subject = req.body.fromSubject;
  const text = req.body.fromMail;

  const auth = {
    auth: {
      api_key: process.env.apikey,
      domain: process.env.domain,
    },
  };

  const transporter = nodemailer.createTransport(mailGun(auth));

  const mailOption = {
    from: email,
    to: "sagargurung5005@gmail.com",
    subject,
    text,
  };

  transporter.sendMail(mailOption, function (err, data) {
    if (err) {
      console.log("error sending" + err);
      console.log("error at server");
    } else {
      console.log("Mail sent succesfully");
    }
  });
});

server.listen(port, () => {
  console.log("Server is listening...........at port " + port);
});
