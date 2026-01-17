const Contact = require("../models/Contact");
const {
  sendContactEmail,
  sendContactAutoReply,
} = require("../utils/emailService");

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
exports.submitContact = async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email, and message",
      });
    }

    // Create contact message
    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
      status: "new",
    });

    // Send email to admin
    try {
      await sendContactEmail({ name, email, phone, message });
    } catch (error) {
      console.error("Error sending admin email:", error);
    }

    // Send auto-reply to user
    try {
      await sendContactAutoReply({ name, email, message });
    } catch (error) {
      console.error("Error sending auto-reply:", error);
    }

    res.status(201).json({
      success: true,
      message: "Thank you for contacting us! We will get back to you soon.",
      data: contact,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all contact messages (Admin only)
// @route   GET /api/contact
// @access  Private/Admin
exports.getAllContacts = async (req, res, next) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;

    const query = {};
    if (status) {
      query.status = status;
    }

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Contact.countDocuments(query);

    res.status(200).json({
      success: true,
      count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single contact message (Admin only)
// @route   GET /api/contact/:id
// @access  Private/Admin
exports.getContact = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact message not found",
      });
    }

    // Update status to 'read' if it's 'new'
    if (contact.status === "new") {
      contact.status = "read";
      await contact.save();
    }

    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update contact status (Admin only)
// @route   PUT /api/contact/:id
// @access  Private/Admin
exports.updateContactStatus = async (req, res, next) => {
  try {
    const { status, adminNotes } = req.body;

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status, adminNotes },
      { new: true, runValidators: true },
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact message not found",
      });
    }

    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete contact message (Admin only)
// @route   DELETE /api/contact/:id
// @access  Private/Admin
exports.deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact message not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact message deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get contact statistics (Admin only)
// @route   GET /api/contact/stats
// @access  Private/Admin
exports.getContactStats = async (req, res, next) => {
  try {
    const total = await Contact.countDocuments();
    const newMessages = await Contact.countDocuments({ status: "new" });
    const read = await Contact.countDocuments({ status: "read" });
    const responded = await Contact.countDocuments({ status: "responded" });
    const archived = await Contact.countDocuments({ status: "archived" });

    res.status(200).json({
      success: true,
      stats: {
        total,
        new: newMessages,
        read,
        responded,
        archived,
      },
    });
  } catch (error) {
    next(error);
  }
};
