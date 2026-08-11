import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";

import { connectDB } from "./lib/db.lib.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`server running on port : ${PORT}`);
  connectDB().then();
});
