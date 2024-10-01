import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./config/config.js"; // Assuming this has your MongoDB URI as an env variable
import SongRoutes from './routes/SongRoutes.js';

const app = express();

// Middleware for JSON and CORS
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
    const PORT = process.env.PORT || config.port || 5000; // Dynamic port for Vercel
    app.listen(PORT, () => {
      console.log(`Server is running on Port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error: ", err);
  });

// Test route to confirm server is up
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is up and running" });
});

// Song routes
app.use('/songs', SongRoutes);

export default app;
