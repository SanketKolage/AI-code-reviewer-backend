import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import aiRoutes from "./routes/ai.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "https://your-frontend.netlify.app" }));
app.use(json());

app.use("/api/auth", authRoutes);
app.use("/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
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
