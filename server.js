'use strict';

// require the installed packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const getAPIData = require('./controllers/characters.controller');
const crud = require ('./controllers/CRUD.controller');

// define the packages server
const app = express();

const PORT = process.env.PORT;

const DB = process.env.DATABASE_URL;

// connect mongoose
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use (cors());
app.use (express.json());



app.get ('/', (req,res) => {
    res.send ('Sukina - 301 Exam - EveryThing is working !')
});
// get data from API endpoint
app.get ('/get-characters', getAPIData);

// crud functions
app.post ('/favorite', crud.creatFavourite);
app.get ('/favorite', crud.retrieveFavourite);
app.delete ('/favorite/:slug',crud.deleteFavourite);
app.put('/favorite/:slug',crud.updateFavourite)
// test the server if it is working 
app.listen (PORT, () =>{
    console.log(`Sever started on ${PORT}`);
});
