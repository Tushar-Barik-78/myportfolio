import mongoose from "mongoose";

export const connectDB = async () => {
    const MONGO = process.env.MONGO_URI ;
    console.log("Mongo URI:", MONGO ? "Found" : "Not Found");
    try {
        await mongoose.connect(MONGO);
        console.log("MongoDB connected Successfully");
        
    } catch (error) {
        console.error("DB connection error:", error);
        throw error;
    }
};