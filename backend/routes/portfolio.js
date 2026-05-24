import express from "express";
import Portfolio from "../models/Portfolio.js";
import auth from "../middleware/auth.js";
import upload from "../middleware/upload.js";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

// GET /api/portfolio
router.get("/", async (req, res) => {
  const data = await Portfolio.findOne();
  res.json(data || {});
});

// PUT /api/portfolio
router.put("/", auth, async (req, res) => {
  try {
    const updated = await Portfolio.findOneAndUpdate(
      {},
      req.body,
      {
        new: true,
        upsert: true,
      }
    );

    res.json({
      message: "Saved!",
      data: updated,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to save",
    });
  }
});

// POST /api/portfolio/upload
router.post(
  "/upload",
  auth,
  upload.single("image"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          message: "No file uploaded",
        });
      }

      // Upload to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "portfolio",
      });

      res.status(200).json({
        success: true,
        url: result.secure_url,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message: "Upload failed",
      });
    }
  }
);

export default router;