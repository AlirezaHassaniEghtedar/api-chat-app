import express from "express";

import {
  checkAuth, deleteProfilePic,
  login,
  logout,
  signup,
  updateProfile,
} from "../controllers/auth.controller.js";

import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/update-profile", protectRoute, updateProfile);
router.delete("/profile-pic" , protectRoute , deleteProfilePic)

router.get("/check-auth", protectRoute, checkAuth);

export default router;
