const express = require("express");
const {
  getDashboardStats,
  getAllUsers,
  updateUserRole,
  updateUserStatus,
  deleteUser,
} = require("../controllers/adminController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

// All routes are admin-only
router.use(protect, authorize("admin"));

router.get("/dashboard", getDashboardStats);
router.get("/users", getAllUsers);
router.put("/users/:id/role", updateUserRole);
router.put("/users/:id/status", updateUserStatus);
router.delete("/users/:id", deleteUser);

module.exports = router;
