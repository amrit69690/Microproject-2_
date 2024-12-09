import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import createRoute from "./routes/createRoute.js";

dotenv.config();
connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Register API routes with the `/api` prefix
app.use("/api", createRoute);

// Fallback route for testing the server
app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
