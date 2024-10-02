import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";  
import config from "./config/config.js"; // Fallback to config for MongoDB URI
import SongRoutes from "./routes/SongRoutes.js"; // Song routes

dotenv.config(); 

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["content-type"],
  })
);

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI || config.mongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.log("MongoDB connection error: ", err);
  });

// Test route to confirm server is up
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is up and running. Welcome to the Music App API!" });
});

// Song routes
app.use("/songs", SongRoutes);

export default app;
