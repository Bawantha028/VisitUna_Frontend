const express = require("express");
const {
  getAllEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  bookEvent,
  getMyBookings,
  getAllBookings,
  updateBookingStatus,
} = require("../controllers/eventController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

// Public routes
router.get("/", getAllEvents);
router.get("/:id", getEvent);

// Protected routes
router.post("/:id/book", protect, bookEvent);
router.get("/bookings/my", protect, getMyBookings);

// Admin routes
router.post("/", protect, authorize("admin"), createEvent);
router.put("/:id", protect, authorize("admin"), updateEvent);
router.delete("/:id", protect, authorize("admin"), deleteEvent);
router.get("/bookings/all", protect, authorize("admin"), getAllBookings);
router.put("/bookings/:id", protect, authorize("admin"), updateBookingStatus);

module.exports = router;
