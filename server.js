const dotenv = require("dotenv").config();
import express from "express";
import { json } from "express";

import aiRoutes from "./src/routes/ai.routes.js";
import cors from "cors";

const app = express();
import { connect } from "mongoose";
app.use(cors());
app.use(json());
import authRoutes from "./src/routes/authRoutes";
app.use("/ai", aiRoutes);


try {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('MongoDB Connected Successfully');
} catch (error) {
  console.error('MongoDB Connection Failed:', error);
  process.exit(1);
}

app.use('/api/auth', authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
