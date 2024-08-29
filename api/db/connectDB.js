import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

export const connectDB = async() => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI)
        console.log("Connect to database successfully: ", db.connection.host);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}