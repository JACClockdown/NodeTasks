import mongoose from "mongoose"
import colors from 'colors'
import { exit } from 'node:process'


export const connectDB = async () => {
    try{
        const { connection } = await mongoose.connect(process.env.BASE_URL)
        const url = `${connection.host}:${connection.port}`
        console.log( colors.magenta.bold(`Connection to MongoDB in ${url}`) )
    }catch(error){
        console.log( colors.red.bold( error.message ) )
        exit(1)
    }
}