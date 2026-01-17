const User = require("../models/User");
const Contact = require("../models/Contact");
const Event = require("../models/Event");
const EventBooking = require("../models/EventBooking");
const GalleryImage = require("../models/GalleryImage");
const Newsletter = require("../models/Newsletter");

// @desc    Get dashboard statistics
// @route   GET /api/admin/dashboard
// @access  Private/Admin
exports.getDashboardStats = async (req, res, next) => {
  try {
    // Get counts
    const totalUsers = await User.countDocuments({ role: "user" });
    const totalAdmins = await User.countDocuments({ role: "admin" });
    const totalContacts = await Contact.countDocuments();
    const newContacts = await Contact.countDocuments({ status: "new" });
    const totalEvents = await Event.countDocuments({ isActive: true });
    const totalBookings = await EventBooking.countDocuments();
    const pendingBookings = await EventBooking.countDocuments({
      status: "pending",
    });
    const totalImages = await GalleryImage.countDocuments({ isActive: true });
    const totalSubscribers = await Newsletter.countDocuments({
      isActive: true,
    });

    // Get recent activities
    const recentUsers = await User.find({ role: "user" })
      .sort({ createdAt: -1 })
      .limit(5)
      .select("firstName lastName email createdAt");

    const recentContacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select("name email message status createdAt");

    const recentBookings = await EventBooking.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .populate("user", "firstName lastName email")
      .populate("event", "title date");

    // Get revenue (if payment is implemented)
    const totalRevenue = await EventBooking.aggregate([
      { $match: { paymentStatus: "paid" } },
      { $group: { _id: null, total: { $sum: "$totalAmount" } } },
    ]);

    // Get bookings by status
    const bookingsByStatus = await EventBooking.aggregate([
      { $group: { _id: "$status", count: { $sum: 1 } } },
    ]);

    // Get popular events
    const popularEvents = await EventBooking.aggregate([
      {
        $group: {
          _id: "$event",
          bookings: { $sum: 1 },
          revenue: { $sum: "$totalAmount" },
        },
      },
      { $sort: { bookings: -1 } },
      { $limit: 5 },
    ]);

    // Populate event details for popular events
    await Event.populate(popularEvents, {
      path: "_id",
      select: "title category price",
    });

    res.status(200).json({
      success: true,
      stats: {
        users: {
          total: totalUsers,
          admins: totalAdmins,
        },
        contacts: {
          total: totalContacts,
          new: newContacts,
        },
        events: {
          total: totalEvents,
        },
        bookings: {
          total: totalBookings,
          pending: pendingBookings,
          byStatus: bookingsByStatus,
        },
        gallery: {
          total: totalImages,
        },
        newsletter: {
          total: totalSubscribers,
        },
        revenue: {
          total: totalRevenue[0]?.total || 0,
        },
      },
      recentActivities: {
        users: recentUsers,
        contacts: recentContacts,
        bookings: recentBookings,
      },
      popularEvents,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all users (Admin only)
// @route   GET /api/admin/users
// @access  Private/Admin
exports.getAllUsers = async (req, res, next) => {
  try {
    const { role, page = 1, limit = 10 } = req.query;

    const query = {};
    if (role) {
      query.role = role;
    }

    const users = await User.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await User.countDocuments(query);

    res.status(200).json({
      success: true,
      count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update user role (Admin only)
// @route   PUT /api/admin/users/:id/role
// @access  Private/Admin
exports.updateUserRole = async (req, res, next) => {
  try {
    const { role } = req.body;

    if (!["user", "admin"].includes(role)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid role. Must be either "user" or "admin"',
      });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true, runValidators: true },
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: `User role updated to ${role}`,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Deactivate/Activate user (Admin only)
// @route   PUT /api/admin/users/:id/status
// @access  Private/Admin
exports.updateUserStatus = async (req, res, next) => {
  try {
    const { isActive } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { isActive },
      { new: true, runValidators: true },
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: `User ${isActive ? "activated" : "deactivated"} successfully`,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete user (Admin only)
// @route   DELETE /api/admin/users/:id
// @access  Private/Admin
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
