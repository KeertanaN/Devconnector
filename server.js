const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Db config
const db = require('./config/keys').mongoURI;
//connect to mongo db
mongoose.connect(db)
        .then(()=>console.log('MongoDB connected'))
        .catch(err=>console.log(err));

app.get('/',(req,res)=>res.send('Hello World!! and good bye'));
const port = 7000;
app.listen(port,()=> console.log(`server running on port ${port}`));
