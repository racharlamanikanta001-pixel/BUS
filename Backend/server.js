import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cityBusRoutes from "./routes/cityBusRoutes.js";
import intercityBusRoutes from "./routes/intercityBusRoutes.js";
import collegeBusRoutes from "./routes/collegeBusRoutes.js";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors())
// Middleware
app.use(express.json());

// Routes
app.use("/api/citybuses", cityBusRoutes);
app.use("/api/intercity", intercityBusRoutes);
app.use("/api/collegebuses", collegeBusRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongoDB Connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
})
.catch((err) => console.error(err));
