


import mongoose from "mongoose";
import envConfig from "../config/config";

const connectToDatabase = async()=>{
    try {
        
        // console.log("Database connected")
        mongoose.connection.on("connected",()=>{
            console.log("Database connected")
        })
        await mongoose.connect(envConfig.mongodbString as string);

    } catch (error) {
        console.log("Failed to connect database",error)
        process.exit(1)
    }
}


export default connectToDatabase