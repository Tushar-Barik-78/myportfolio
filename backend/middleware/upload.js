// backend/middleware/upload.js
// multer-storage-cloudinary cloudinary v2 ke saath kaam nahi karta
// Solution: memoryStorage use karo — file RAM mein aati hai
// phir routes/portfolio.js mein upload_stream se Cloudinary pe bhejo

import multer from "multer";

const storage = multer.memoryStorage(); // disk pe save nahi hoga

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max
});

export default upload;