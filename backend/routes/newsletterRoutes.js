const express = require("express");
const {
  subscribe,
  unsubscribe,
  getAllSubscribers,
  deleteSubscriber,
  getNewsletterStats,
} = require("../controllers/newsletterController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

// Public routes
router.post("/subscribe", subscribe);
router.post("/unsubscribe", unsubscribe);

// Admin routes
router.get("/", protect, authorize("admin"), getAllSubscribers);
router.get("/stats", protect, authorize("admin"), getNewsletterStats);
router.delete("/:id", protect, authorize("admin"), deleteSubscriber);

module.exports = router;
