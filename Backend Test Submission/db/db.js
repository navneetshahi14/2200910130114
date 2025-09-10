const mongoose = require("mongoose");
const mongooseURI = 'mongodb://localhost:27012/test'

const ConnectDB = async() =>{
    try{

        const db = await mongoose.connect(mongooseURI);
        console.log(`Database Connected ${db.connection.host}`);

    }catch(err){
        console.log(err)
    }
}

module.exports = ConnectDB