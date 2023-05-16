const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const  port = process.env.PORT || 5000;

// midilwere 
app.use(cors());
app.use(express.json());







app.get('/', (req,res)=>{
    res.send("'Hello Nayme', Welcome to Coffee-store-server-side")
})

app.listen(port,()=>{
    console.log(`Server is running this port ${port}`);
})
