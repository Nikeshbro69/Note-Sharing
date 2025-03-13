import { NextFunction, Request, Response } from "express"
import { HttpError } from "http-errors"
import envConfig from "../config/config"





const globalErrorHandler = (err:HttpError, req:Request, res:Response, next:NextFunction)=>{
    const statusCode = err.statusCode || 500 //set statusCode to err.statusCode ma ako status code chaina bhane 500 yadi error ako cha bhane.
    res.status (statusCode).json({
        message : err.message,  //k error k cha err.message ma hunca tyslai display garau ney 

        //to prevent normal use to view error stack trace means normal user ley code ko kun line ma kasto error ako cha bhanera tha pauna bhayena production ma , development/local machine ma huda ta kei samasya bhayena. yo chahi err,stack ma ako huncha
        errorStack : envConfig.enviornment === 'development' ? err.stack : "Something went wrong"


    })
}



export default globalErrorHandler