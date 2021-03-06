const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

//Load config file
dotenv.config({path: './config.env'});

const app = express();

//Dev logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//Profile routes;
app.use('/api/v1/profile', require('./routes/profile'));
const port = process.env.PORT || 8000;

//Handle Production
if(process.env.NODE_ENV==='production'){
    //Set static folder
    app.use(express.static(__dirname + '/build/'));

    //Handle SPA
    app.get(/.*/, (req,res) => res.sendFile(__dirname + '/build/index.html'));
}
app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}` )
});