import { Request, Response } from "express";
import noteModel from "./noteModel";
import envConfig from "../config/config";

const createNote = async(req:Request, res:Response)=>{
    
    const file = req.file ? `${envConfig.backendurl}/${req.file.filename}` : `C:/Users/Nikesh Dhimal/OneDrive/Documents/Typescript/Notesharing/Server/Defaultimage.PNG`
    const {title, subtitle,description} = req.body
    // Server side validation:
    if (!title || !subtitle || !description){
        res.status(400).json({
            message : "Please enter the data"
        })
        return
    }
    await noteModel.create({
        title,
        subtitle,
        description
    })
    res.status(200).json({
        message : "Data added successfully"
    })
}