const Newsletter = require("../models/Newsletter");

// @desc    Subscribe to newsletter
// @route   POST /api/newsletter/subscribe
// @access  Public
exports.subscribe = async (req, res, next) => {
  try {
    const { email, source = "other" } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Please provide an email address",
      });
    }

    // Check if already subscribed
    const existing = await Newsletter.findOne({ email });

    if (existing) {
      if (existing.isActive) {
        return res.status(400).json({
          success: false,
          message: "This email is already subscribed to our newsletter",
        });
      } else {
        // Reactivate subscription
        existing.isActive = true;
        await existing.save();

        return res.status(200).json({
          success: true,
          message: "Welcome back! Your subscription has been reactivated.",
        });
      }
    }

    // Create new subscription
    const subscription = await Newsletter.create({
      email,
      source,
    });

    res.status(201).json({
      success: true,
      message: "Successfully subscribed to newsletter!",
      data: subscription,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Unsubscribe from newsletter
// @route   POST /api/newsletter/unsubscribe
// @access  Public
exports.unsubscribe = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Please provide an email address",
      });
    }

    const subscription = await Newsletter.findOne({ email });

    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: "Email not found in our newsletter list",
      });
    }

    subscription.isActive = false;
    await subscription.save();

    res.status(200).json({
      success: true,
      message: "Successfully unsubscribed from newsletter",
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all subscribers (Admin only)
// @route   GET /api/newsletter
// @access  Private/Admin
exports.getAllSubscribers = async (req, res, next) => {
  try {
    const { isActive, page = 1, limit = 20 } = req.query;

    const query = {};
    if (isActive !== undefined) {
      query.isActive = isActive === "true";
    }

    const subscribers = await Newsletter.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Newsletter.countDocuments(query);

    res.status(200).json({
      success: true,
      count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      data: subscribers,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete subscriber (Admin only)
// @route   DELETE /api/newsletter/:id
// @access  Private/Admin
exports.deleteSubscriber = async (req, res, next) => {
  try {
    const subscriber = await Newsletter.findByIdAndDelete(req.params.id);

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: "Subscriber not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Subscriber deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get newsletter statistics (Admin only)
// @route   GET /api/newsletter/stats
// @access  Private/Admin
exports.getNewsletterStats = async (req, res, next) => {
  try {
    const total = await Newsletter.countDocuments();
    const active = await Newsletter.countDocuments({ isActive: true });
    const inactive = await Newsletter.countDocuments({ isActive: false });

    const bySource = await Newsletter.aggregate([
      { $group: { _id: "$source", count: { $sum: 1 } } },
    ]);

    res.status(200).json({
      success: true,
      stats: {
        total,
        active,
        inactive,
        bySource,
      },
    });
  } catch (error) {
    next(error);
  }
};
