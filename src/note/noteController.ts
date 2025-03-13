import { NextFunction, Request, Response } from "express";
import noteModel from "./noteModel";
import envConfig from "../config/config";
import createHttpError from "http-errors";

const createNote = async(req:Request, res:Response, next:NextFunction)=>{
    // console.log(req.body)
    // console.log(req)
    try {
        const file = req.file ? `${envConfig.backendurl}/${req.file.filename}` : 'C:/Users/Nikesh Dhimal/OneDrive/Documents/Typescript/Notesharing/Server/Defaultimage.PNG'
        
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
        description,
        file
    })
    res.status(200).json({
        message : "Note created successfully"
    })
    } catch (error) {
        console.log(error)
        return next(createHttpError(500, 'Error while creating'))
    }
}


export {createNote}