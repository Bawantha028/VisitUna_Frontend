const express = require("express");
const {
  getAllImages,
  getImage,
  uploadImage,
  updateImage,
  deleteImage,
  likeImage,
  getGalleryStats,
} = require("../controllers/galleryController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

// Public routes
router.get("/", getAllImages);
router.get("/:id", getImage);
router.put("/:id/like", likeImage);

// Admin routes
router.get("/stats/all", protect, authorize("admin"), getGalleryStats);
router.post("/", protect, authorize("admin"), uploadImage);
router.put("/:id", protect, authorize("admin"), updateImage);
router.delete("/:id", protect, authorize("admin"), deleteImage);

module.exports = router;
