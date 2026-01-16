import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/DbConnector.js";
import contactRoutes from "./routes/ContactRouter.js";
import userRoutes from "./routes/UserRouter.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
