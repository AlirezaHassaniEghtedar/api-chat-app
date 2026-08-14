import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";

import { connectDB } from "./lib/db.lib.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();

const app = express();

app.use(express.json({ limit: "2mb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`server running on port : ${PORT}`);
  connectDB().then();
});
