import app from "./src/app"
import envConfig from "./src/config/config"
import connectToDatabase from "./src/database/db"


const Startserver = async()=>{
    await connectToDatabase()
    try {
        app.listen(envConfig.port,()=>{
            console.log("Node project started")
            
        })
    } catch (error) {
        console.log(error)
    }
}

Startserver()