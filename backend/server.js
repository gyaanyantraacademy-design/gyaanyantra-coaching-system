const studentRoutes = require("./routes/studentRoutes");

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/students", studentRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log(err));

// Test route
app.get("/", (req, res) => {
  res.send("Backend running and DB connected");
});

app.listen(5000, () => console.log("Server running on port 5000"));
