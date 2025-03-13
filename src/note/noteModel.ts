

import mongoose from 'mongoose'
import { Note } from './noteTypes'

const noteSchema = new mongoose.Schema<Note>({
    title : {
        type : String,
        require : true
    },
    subtitle : String,
    description : {
        type: String,
        require : true
    },
    file : String

},{timestamps : true})


export default mongoose.model<Note>("Note",noteSchema)