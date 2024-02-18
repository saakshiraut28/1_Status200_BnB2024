/** @format */
const User = require("../models/userModel");
const Video = require("../models/videoModel");
const express = require("express");
const router = express.Router();

// GET all doctors
router.get("/", async (req, res) => {
  const user = await User.find({}).sort({ createdAt: -1 });
  res.status(200).json(user);
});

//GET a single doctor
router.get("/videos", async (req, res) => {
  const video = await Video.find({}).sort({ createdAt: -1 });

  if (!video) {
    return res.status(404).json({ error: "No such doctor found" });
  }

  res.status(200).json(video);
});

module.exports = router;
