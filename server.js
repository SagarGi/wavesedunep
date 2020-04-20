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
const port = process.env.PORT || 5000

server.listen(port, ()=>{
    console.log("Server is listening...........")
})