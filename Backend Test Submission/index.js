const express = require("express");
const ConnectDB = require("./db/db");
const app = express();
const PORT = process.env.PORTNo || 8000;


ConnectDB()
app.use(express.json());


app.get('/',(req,res)=>{
    res.json("Server is running");
})



app.listen(PORT,()=>console.log(`Server Running at PORTNo ${PORT}`));