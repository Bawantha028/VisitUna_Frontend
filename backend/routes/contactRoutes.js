const express = require("express");
const {
  submitContact,
  getAllContacts,
  getContact,
  updateContactStatus,
  deleteContact,
  getContactStats,
} = require("../controllers/contactController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

// Public route
router.post("/", submitContact);

// Admin routes
router.get("/", protect, authorize("admin"), getAllContacts);
router.get("/stats", protect, authorize("admin"), getContactStats);
router.get("/:id", protect, authorize("admin"), getContact);
router.put("/:id", protect, authorize("admin"), updateContactStatus);
router.delete("/:id", protect, authorize("admin"), deleteContact);

module.exports = router;
