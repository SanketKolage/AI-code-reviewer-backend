const dotenv = require("dotenv").config();
const express = require("express");
const { json } = require("express");

const aiRoutes = require("./src/routes/ai.routes");
const cors = require("cors");

const app = express();
const { connect } = require( "mongoose");
app.use(cors());
app.use(json());
const authRoutes = require( "./src/routes/authRoutes");
app.use("/ai", aiRoutes);


connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/auth', authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
