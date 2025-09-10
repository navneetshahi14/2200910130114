import mongoose  from "mongoose"

const UrlSchema = new mongoose.Schema({
    originalurl:{
        type:String,
        required:true
    },
    shortUrl:{
        type:String,
        required:true,
    },
    urlId:{
        type:String,
        required:true
    },
    expiresIn:{
        type:String
    }
},{
    timestamps:true,
})

const Url = mongoose.model("URL",UrlSchema);
export default Url