import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./src/routes/authRoutes.js";
import aiRoutes from "./src/routes/ai.routes.js";

const app = express();
const PORT = process.env.PORT ; // Ensure Render uses its assigned port

app.use(cors());
app.use(json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Start the server first
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// Then connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected Successfully",PORT);
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

connectDB();
