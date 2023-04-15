// require 3rd party packages
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000
const connectDB = require('./db');

// middleware for parsing data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());


// now we will connect to our database
connectDB();

// routes
// on this end point this route will be called
app.use('/api/users', require('./api/routes/userRoute'));


// listening on port 3000
app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`);
});