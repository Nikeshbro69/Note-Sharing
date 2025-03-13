import {config} from 'dotenv'
config()


const envConfig = {
    port : process.env.PORT,
    mongodbString : process.env.MONGODB_URI,
    backendurl : process.env.BACKEND_URL,
    enviornment : process.env.NODE_ENV,
    frontendurl : process.env.FRONTEND_URL
}


export default envConfig