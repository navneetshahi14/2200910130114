import UrlModel from '../model/urlModel.js'
import {validateUrl} from '../utils/utils.js'
import {nanoid} from 'nanoid'

export const urlShortener = async(req,res) => {
    try{

        const {originalurl} = req.body;

        const base = process.env.BASE || "BASE"
        const urlId = nanoid();

        if(!originalurl) {
            res.status(404).json({message:"URL is requried"});
        }

        if(validateUrl(originalurl)){
            let url = await UrlModel.findOne({originalurl});
            if(url){
                res.status(200).json(url)
            }
            else{
                const shortUrl = `${base}/${urlId}`

                url = new UrlModel({
                    originalurl,
                    shortUrl,
                    urlId
                })

                await url.save();
                res.status(200).json(url);
            }
        }else{
            console.log("Not valid")
        }

    }catch(err){
        console.log(err.message)
    }
}

export const originalUrl = async(req,res) => {
    try{

        const {urlId} = req.params;
        
        const url = await UrlModel.findOne({urlId});

        if(url){
            return res.redirect(url.originalurl);

        }else {
            return res.status(404).json({message:"Url not found"})
        }

    }catch(err){
        console.log(err)
    }
}

export const getAllurl = async(req,res) => {
    try{

        const url = await UrlModel.find();
        return res.json(url);

    }catch(err){
        console.log(err);
    }
}