//NodeJS
//NodeJS, used to develop the servers
//NodeJS Applications, we will develop by using JavaScript


//import the modules
//@express          (Rest API'S)
//@cors             (Enable the Ports Communication)
//@mongodb          (connect to mongodb database)
//@body-parser      (read the data from client applications(ReactJS))
//require() function, used to import the modules
const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
const bodyparser = require("body-parser");



//create rest object
const app = express();
//where "app" is the rest object
//where "app" object used to develop the rest services


//enable the cors policy
app.use( cors() );



//MIME Type
app.use( bodyparser.json() );


//read the data coming from client application
app.use(bodyparser.urlencoded({extended:false}));



//create the reference variable by using "mongodb" module
//above reference variable helps to connect to "mongodb" database
let ashokIT = mongodb.MongoClient;
//where "ashokIT" is the reference variable
//where "ashokIT" used to connect to database



//create the GET Request
app.get("/products",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@ashokit.2lxmw.mongodb.net/ecommerce?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            //get the database reference
            let db = connection.db("ecommerce");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }     
    });
});


//assign port number
let port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("server started !!!");
});


