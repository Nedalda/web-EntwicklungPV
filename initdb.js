  const mongoose = require("mongoose") ;
const express  = require ("express") ;
const  app = express () ;

  const Article = require("./article");
const { MongoClient, GridFSBucket } = require('mongodb');

app.post ("/articles" , async (req , res) =>{

  const  newArticle = new Article ()
    newArticle.title = "A" ;
  newArticle.name = "nedal" ;
  newArticle.age = 30  ;

  await newArticle.save() ;
  res.send( "has been saved  ")

  })



mongoose.connect("mongodb+srv://Nedal:Nedal@cluster0.n5iao4w.mongodb.net/?retryWrites=true&w=majority")
     .then (() =>
     {
            console.log("succes with db")
     }).catch ((error) =>
 {
console.log("error cant connet  : " + error) ;
 });




app.listen(3000, () => {
    console.log("Listening on port 3000");
}) ;
