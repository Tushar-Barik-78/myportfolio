// backend/routes/portfolio.js
import express from "express";
import Portfolio from "../models/Portfolio.js";
import auth from "../middleware/auth.js";
import upload from "../middleware/upload.js";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

// GET /api/portfolio
router.get("/", async (req, res) => {
  try {
    const data = await Portfolio.findOne();
    res.json(data || {});
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch portfolio" });
  }
});

// PUT /api/portfolio
router.put("/", auth, async (req, res) => {
  try {
    const updated = await Portfolio.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true }
    );
    res.json({ message: "Saved!", data: updated });
  } catch (error) {
    console.error("Save error:", error);
    res.status(500).json({ message: "Failed to save" });
  }
});

// POST /api/portfolio/upload
// memoryStorage se file buffer milta hai → upload_stream se Cloudinary pe bhejo
router.post("/upload", auth, upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // upload_stream ek Promise mein wrap karo
    const uploadToCloudinary = (buffer, mimetype) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "portfolio",
            resource_type: "auto", // image + pdf dono handle karta hai
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        stream.end(buffer); // buffer stream mein dalo
      });
    };

    const result = await uploadToCloudinary(req.file.buffer, req.file.mimetype);

    console.log("✓ Uploaded:", result.secure_url);

    res.status(200).json({
      success: true,
      url: result.secure_url,
    });

  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ success: false, message: "Upload failed" });
  }
});

export default router;