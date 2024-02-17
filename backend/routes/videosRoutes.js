/** @format */

const express = require("express");

const router = express.Router();

// GET all videos
router.get("/", (req, res) => {
  res.json({ msg: "Videos fetched" });
});

//GET a single video
router.get("/:id", (req, res) => {
  res.status(200).json({ msg: "Video fetched" });
});

// POST a new video
router.post("/", (req, res) => {
  res.status(200).json({ msg: "Videos created" });
});

// DELETE a video
router.delete("/:id", (req, res) => {
  res.status(200).json({ msg: "Videos deleted" });
});

// UPDATE a video
router.patch("/:id", (req, res) => {
  res.status(200).json({ msg: "Videos Updated" });
});

module.exports = router;
