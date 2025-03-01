import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./src/routes/authRoutes.js";
import aiRoutes from "./src/routes/ai.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(json());

app.use("/api/auth", authRoutes);
app.use("/ai", aiRoutes);
console.log(process.env.MONGO_URI); 
app.get("/", (req, res) => {
  res.send("Hello World");
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
     
    });
    console.log("✅ MongoDB Connected Successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

connectDB();
