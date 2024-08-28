import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

export const db = await mongoose.createConnection(process.env.MONGO_URI).asPromise()