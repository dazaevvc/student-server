//DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//APP SETUP
const port = 3000;
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//ROUTES
app.get("/", function(req, res){
  res.send("WHERE ARE YEAAAU WELL AIM SAO SAORREYY");
});

//START SERVER
app.listen(port, function(){
  console.log(`Server up and running on port number ${port}`);
});
