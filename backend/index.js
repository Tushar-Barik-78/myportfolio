import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import authRoutes from "./routes/auth.js";
import portfolioRoutes from "./routes/portfolio.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
app.use(cors({
  origin: ["https://tusharbarik.vercel.app", "https://www.tusharbarik.vercel.app"]
}));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/portfolio", portfolioRoutes);

const PORT = process.env.PORT || 5000;


app.listen(PORT, async() => {
	try {
		await connectDB();
	  console.log(`Server running on port ${PORT}`);
	} catch (error) {
		console.error("Error starting server:", error);
	}
});