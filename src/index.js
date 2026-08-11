import express from "express";
import cookieParser from "cookie-parser";

import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";

import { connectDB } from "./lib/db.lib.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser);

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`server running on port : ${PORT}`);
  connectDB().then();
});
