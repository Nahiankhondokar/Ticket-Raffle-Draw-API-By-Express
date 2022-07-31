const express = require('express');
const dotenv = require('dotenv').config();
const app = express();

// environment setup
const PORT = process.env.SERVER_PORT || 5000;


// routes 
app.use('/api/tickets', require('./routes/ticketRoute'));


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});