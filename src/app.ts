import express from 'express'
import globalErrorHandler from './middlewares/globalErrorHandler'
// import { createNote } from './note/noteController'
import noteRoute from './note/noteRoute'
import envConfig from './config/config'
import cors from 'cors'


const app = express()
// parse incoming JSON to handle Undefined error 
app.use(express.json())

//Cors configuration:
app.use(cors({
    origin : envConfig.frontendurl
}))

app.use("/api/notes",noteRoute)

//Image public
app.use(express.static("./src/uploads"))
//Global error handler
app.use(globalErrorHandler) //Every time call garna lai
export default app