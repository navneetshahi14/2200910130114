import dotenv from "dotenv"
import express  from "express"
import ConnectDB from "./db/db.js"
const app = express();
import UrlRouter from "./routes/urlRoute.js"
// const router = require("./routes/urlRoute");
const PORT = process.env.PORTNo || 8000;

dotenv.config({quiet:true});

ConnectDB()
app.use(express.json());
app.use('/',UrlRouter);


app.get('/',(req,res)=>{
    res.json("Server is running");
})



app.listen(PORT,()=>console.log(`Server Running at PORTNo ${PORT}`));