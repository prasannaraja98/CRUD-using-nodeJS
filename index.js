const express = require('express');
const routes = require('./src/routes/crmRoute');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const app = express();
const PORT = 9000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CRMdb",{
 useNewUrlParser:true,
 useUnifiedTopology:true
});

//bodyparser 
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

routes(app);

app.get('/',(req,res)=>{
    res.send(`Node and Express running on port ${PORT}`);
});

app.listen(PORT,()=>{
    console.log("Server running");
});

