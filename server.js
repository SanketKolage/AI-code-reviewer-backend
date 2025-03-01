import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./src/routes/authRoutes.js";
import aiRoutes from "./src/routes/ai.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "https://ai-code-reviewer-frontend.netlify.app/" }));
app.use(json());

app.use("/api/auth", authRoutes);
app.use("/ai", aiRoutes);
console.log(process.env.MONGO_URI); 
app.get("/", (req, res) => {
  res.send("Hello World");
});

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Failed: ${error.message}`);
    process.exit(1);
  }
};

connectDB();
