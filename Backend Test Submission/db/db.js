import dotenv from 'dotenv';
dotenv.config()
import mongoose from "mongoose";
const mongooseURI = process.env.MONGOOSEURI

const ConnectDB = async() =>{
    try{

        const db = await mongoose.connect(mongooseURI);
        console.log(`Database Connected ${db.connection.host}`);

    }catch(err){
        console.log(err)
    }
}

export default ConnectDB