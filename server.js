//DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//CONNECT TO MONGO DB
require("dotenv").config();

mongoose.connection.openURI(process.env.DB_CONN, function(err, conn){
  if (err) {
    console.log("ERROR MY DUDE", err);
  } else {
    console.log("CONNECTED TO MONGO DB", );
  }
});

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

const studentRoutes = require("./routes/students");

app.get("/students", studentRoutes.getStudents);
app.get("/students/:id", studentRoutes.getOneStudent);
app.post("/students", studentRoutes.createOneStudent);
app.put("/students/:id", studentRoutes.updateStudent);
app.delete("/students/:id", studentRoutes.removeStudent);

//START SERVER
app.listen(port, function(){
  console.log(`Server up and running on port number ${port}`);
});
