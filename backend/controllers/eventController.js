const Event = require("../models/Event");
const EventBooking = require("../models/EventBooking");

// @desc    Get all events
// @route   GET /api/events
// @access  Public
exports.getAllEvents = async (req, res, next) => {
  try {
    const { category, featured, page = 1, limit = 10 } = req.query;

    const query = { isActive: true };

    if (category) {
      query.category = category;
    }

    if (featured !== undefined) {
      query.featured = featured === "true";
    }

    const events = await Event.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Event.countDocuments(query);

    res.status(200).json({
      success: true,
      count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      data: events,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single event
// @route   GET /api/events/:id
// @access  Public
exports.getEvent = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    res.status(200).json({
      success: true,
      data: event,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create event (Admin only)
// @route   POST /api/events
// @access  Private/Admin
exports.createEvent = async (req, res, next) => {
  try {
    const event = await Event.create(req.body);

    res.status(201).json({
      success: true,
      data: event,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update event (Admin only)
// @route   PUT /api/events/:id
// @access  Private/Admin
exports.updateEvent = async (req, res, next) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    res.status(200).json({
      success: true,
      data: event,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete event (Admin only)
// @route   DELETE /api/events/:id
// @access  Private/Admin
exports.deleteEvent = async (req, res, next) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Event deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Book event
// @route   POST /api/events/:id/book
// @access  Private
exports.bookEvent = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    const { numberOfPeople, contactEmail, contactPhone } = req.body;

    // Check availability
    if (event.availableSlots < numberOfPeople) {
      return res.status(400).json({
        success: false,
        message: "Not enough slots available",
      });
    }

    // Calculate total amount
    const totalAmount = event.price * numberOfPeople;

    // Create booking
    const booking = await EventBooking.create({
      user: req.user.id,
      event: event._id,
      numberOfPeople,
      totalAmount,
      contactEmail,
      contactPhone,
      status: "pending",
    });

    // Update available slots
    event.availableSlots -= numberOfPeople;
    await event.save();

    // Populate event details
    await booking.populate("event");

    res.status(201).json({
      success: true,
      message: "Event booked successfully",
      data: booking,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get user bookings
// @route   GET /api/events/bookings/my
// @access  Private
exports.getMyBookings = async (req, res, next) => {
  try {
    const bookings = await EventBooking.find({ user: req.user.id })
      .populate("event")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all bookings (Admin only)
// @route   GET /api/events/bookings/all
// @access  Private/Admin
exports.getAllBookings = async (req, res, next) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;

    const query = {};
    if (status) {
      query.status = status;
    }

    const bookings = await EventBooking.find(query)
      .populate("user", "firstName lastName email")
      .populate("event")
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await EventBooking.countDocuments(query);

    res.status(200).json({
      success: true,
      count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      data: bookings,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update booking status (Admin only)
// @route   PUT /api/events/bookings/:id
// @access  Private/Admin
exports.updateBookingStatus = async (req, res, next) => {
  try {
    const { status, paymentStatus } = req.body;

    const booking = await EventBooking.findByIdAndUpdate(
      req.params.id,
      { status, paymentStatus },
      { new: true, runValidators: true },
    ).populate("event user");

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    res.status(200).json({
      success: true,
      data: booking,
    });
  } catch (error) {
    next(error);
  }
};
